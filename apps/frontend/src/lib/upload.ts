import { createClient } from "@supabase/supabase-js";

export async function uploadThumbnail(image: File) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_API_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase URL or API Key is missing");
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  const data = await supabase.storage
    .from("thumbnails")
    .upload(`${image.name}_${Date.now()}`, image);

  if (!data.data?.path) throw new Error("failed to upload file");

  const urlData = await supabase.storage
    .from("thumbnails")
    .getPublicUrl(data.data?.path);

  return urlData.data.publicUrl;
}
