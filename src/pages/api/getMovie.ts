import type { NextApiRequest, NextApiResponse } from 'next';
import axios from "axios";

import { CarouselItemProps } from "vk/features/CarouselItem/ui/CarouselItem";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
  const { id } = req.query;

  try {
    const { data } = await axios.get<CarouselItemProps[]>('http://localhost:3000/data/movies.json');
    const item = data.find((item) => item.id === String(id));

    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}