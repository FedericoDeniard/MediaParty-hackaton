-- Usuario de prueba para desarrollo local.
-- Credenciales: user@test.com / password123
-- Se aplica en cada `supabase db reset` (ver [db.seed] en config.toml).

do $seed$
declare
  test_user_id uuid := 'a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d';
  test_email text := 'user@test.com';
begin
  if exists (select 1 from auth.users where email = test_email) then
    return;
  end if;

  insert into auth.users (
    instance_id,
    id,
    aud,
    role,
    email,
    encrypted_password,
    email_confirmed_at,
    confirmation_token,
    recovery_token,
    email_change,
    email_change_token_new,
    email_change_token_current,
    phone_change,
    phone_change_token,
    raw_app_meta_data,
    raw_user_meta_data,
    created_at,
    updated_at
  )
  values (
    '00000000-0000-0000-0000-000000000000',
    test_user_id,
    'authenticated',
    'authenticated',
    test_email,
    extensions.crypt('password123', extensions.gen_salt('bf')),
    now(),
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '{"provider": "email", "providers": ["email"]}'::jsonb,
    '{"name": "Cuenta de prueba"}'::jsonb,
    now(),
    now()
  );

  insert into auth.identities (
    id,
    provider_id,
    user_id,
    identity_data,
    provider,
    last_sign_in_at,
    created_at,
    updated_at
  )
  values (
    gen_random_uuid(),
    test_user_id::text,
    test_user_id,
    jsonb_build_object(
      'sub', test_user_id::text,
      'email', test_email,
      'email_verified', true,
      'phone_verified', false
    ),
    'email',
    now(),
    now(),
    now()
  );
end
$seed$;
