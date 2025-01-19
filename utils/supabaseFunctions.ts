import { supabase } from "../utils/supabase";

export const getAllTodos = async () => {
  const todos = await supabase.from("todo").select("*");
  return todos.data;
};
