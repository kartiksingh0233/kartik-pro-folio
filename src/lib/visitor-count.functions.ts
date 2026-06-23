import { createServerFn } from "@tanstack/react-start";

export const trackVisit = createServerFn({ method: "POST" })
  .inputValidator((input: { alreadyCounted?: boolean }) => input)
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    if (!data.alreadyCounted) {
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
    }

    const { data: row } = await supabaseAdmin
      .from("visitor_stats")
      .select("total_visits")
      .single();

    if (!row) {
      throw new Error("Failed to fetch visitor count");
    }

    return { count: row.total_visits };
  });
