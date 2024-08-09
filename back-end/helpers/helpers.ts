

export const insertUserSQL = "INSERT INTO users (username,email,phone,x,y) VALUES ($1, $2, $3, $4, $5) RETURNING *";
export const getUserIdSQL = "SELECT * FROM users WHERE id = $1";
export const getAllUserSQL = "SELECT * FROM users";
export const getUserSearchSQL = "SELECT * FROM users WHERE username ILIKE '%' || $1 || '%'";
