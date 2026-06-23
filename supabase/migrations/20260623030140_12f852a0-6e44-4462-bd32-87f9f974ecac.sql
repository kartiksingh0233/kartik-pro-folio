CREATE TABLE public.visitor_stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  total_visits bigint NOT NULL DEFAULT 10000,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Insert the initial row with 10000 visits
INSERT INTO public.visitor_stats (total_visits) VALUES (10000);

GRANT SELECT ON public.visitor_stats TO anon;
GRANT ALL ON public.visitor_stats TO service_role;

ALTER TABLE public.visitor_stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anyone to read visitor stats"
  ON public.visitor_stats
  FOR SELECT
  TO anon
  USING (true);