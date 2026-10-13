// Website sign-ups go to Supabase through two database functions (see 004_website.sql).
// The publishable key is safe in the browser: it can only call those functions, never read data.
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://twmojaxvuuptezskdwbj.supabase.co";
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_latNs_LJxwyPvPcdlkgTVA_12YWVaL0";

export type RpcResult = { ok: boolean; already?: boolean; error?: string };

async function rpc(fn: string, args: Record<string, unknown>): Promise<RpcResult> {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${fn}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", apikey: SUPABASE_KEY },
      body: JSON.stringify(args),
    });
    if (!res.ok) return { ok: false, error: "Something went wrong on our side. Please try again." };
    return (await res.json()) as RpcResult;
  } catch {
    return { ok: false, error: "We could not reach Escardia. Check your connection and try again." };
  }
}

export const joinWaitlist = (email: string, source: string) =>
  rpc("join_waitlist", { p_email: email, p_kind: "customer", p_source: source });

export const registerVendor = (v: {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  businessName: string;
  fleetSize: string;
}) =>
  rpc("join_waitlist", {
    p_email: v.email,
    p_kind: "vendor",
    p_first_name: v.firstName,
    p_last_name: v.lastName,
    p_phone: v.phone,
    p_business_name: v.businessName,
    p_fleet_size: v.fleetSize,
    p_source: "website",
  });

export const requestAccountDeletion = (email: string, phone: string, reason: string) =>
  rpc("request_account_deletion", { p_email: email, p_phone: phone, p_reason: reason });
