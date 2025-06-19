export const environment = {
  production: true,
  supabase: {
    databaseUrl: process.env['SUPABASE_DATABASE_URL'] || '',
    anonKey: process.env['SUPABASE_ANON_KEY'] || '',
  },
};
