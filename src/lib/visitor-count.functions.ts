import { createServerFn } from "@tanstack/react-start";

export const trackVisit = createServerFn({ method: "POST" })
  .inputValidator((input: { alreadyCounted?: boolean }) => input)
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    if (!data.alreadyCounted) {
      const { error: updErr } = await supabaseAdmin
        .from("visitor_stats")
        .update({ total_visits: supabaseAdmin.rpc("increment_visitor_count") })
        .eq("id", (await supabaseAdmin.from("visitor_stats").select("id").single()).data?.id);

      // Fallback: raw increment if RPC doesn't exist
      if (updErr) {
        await supabaseAdmin.rpc("increment_visitor_count").catch(async () => {
          const { data: row } = await supabaseAdmin
            .from("visitor_stats")
            .select("id, total_visits")
            .single();
          if (row) {
            await supabaseAdmin
              .from("visitor_stats")
              .update({ total_visits: row.total_visits + 1 })
              .eq("id", row.id);
          }
        });
      }
    }

    const { data: row, error } = await supabaseAdmin
      .from("visitor_stats")
      .select("total_visits")
      .single();

    if (error || !row) {
      throw new Error("Failed to fetch visitor count");
    }

    return { count: row.total_visits };
  });
