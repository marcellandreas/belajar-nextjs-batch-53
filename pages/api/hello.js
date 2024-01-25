// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

export default async function handler(req, res) {
  try {
    const response = await (await fetch("https://dummyjson.com/users")).json();
    res.status(200).json({ ...response });
  } catch (error) {}
}
