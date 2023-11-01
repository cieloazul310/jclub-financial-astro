import { z, defineCollection } from "astro:content";

const dataCollection = defineCollection({
  type: "data",
  schema: z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    fullname: z.string(),
    year: z.number(),
    category: z.string(),
    license: z.string().optional().nullable(),
    rank: z.number(),
    points: z.number(),
    ppg: z.number(),
    elevation: z.string().optional().nullable(),
    revenue: z.number(),
    expense: z.number(),
    op_profit: z.number(),
    no_rev: z.number().optional().nullable(),
    no_exp: z.number().optional().nullable(),
    ordinary_profit: z.number(),
    sp_rev: z.number().optional().nullable(),
    sp_exp: z.number().optional().nullable(),
    profit_before_tax: z.number().optional().nullable(),
    tax: z.number().optional().nullable(),
    profit: z.number(),
    curr_assets: z.number().optional().nullable(),
    fixed_assets: z.number().optional().nullable(),
    assets: z.number().optional().nullable(),
    curr_liabilities: z.number().optional().nullable(),
      fixed_liabilities: z.number().optional().nullable(),
      liabilities: z.number().optional().nullable(),
      net_worth: z.number().optional().nullable(),
      capital_stock: z.number().optional().nullable(),
      capital_surplus: z.number().optional().nullable(),
      retained_earnings: z.number().optional().nullable(),
      sponsor: z.number().optional().nullable(),
      ticket: z.number().optional().nullable(),
      broadcast: z.number().optional().nullable(),
      academy_rev: z.number().optional().nullable(),
      women_rev: z.number().optional().nullable(),
      goods_rev: z.number().optional().nullable(),
      other_revs: z.number().optional().nullable(),
      related_revenue: z.number().optional().nullable(),
      salary: z.number().optional().nullable(),
      manage_exp: z.number().optional().nullable(),
      general_exp: z.number().optional().nullable(),
      game_exp: z.number().optional().nullable(),
      team_exp: z.number().optional().nullable(),
      academy_exp: z.number().optional().nullable(),
      women_exp: z.number().optional().nullable(),
      goods_exp: z.number().optional().nullable(),
      other_cost: z.number().optional().nullable(),
      sga: z.number().optional().nullable(),
      league_attd: z.number(),
      league_games: z.number(),
      leaguecup_attd: z.number().optional().nullable(),
      leaguecup_games: z.number().optional().nullable(),
      po_attd: z.number().optional().nullable(),
      po_games: z.number().optional().nullable(),
      acl_attd: z.number().optional().nullable(),
      acl_games: z.number().optional().nullable(),
      second_attd: z.number().optional().nullable(),
      second_games: z.number().optional().nullable(),
      all_attd: z.number(),
      all_games: z.number(),
  }),
});

export const collections = {
  'dataset': dataCollection,
};