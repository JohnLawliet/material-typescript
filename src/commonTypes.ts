export interface ICreate {
title: string,
details: string,
category: string
}

export interface INote extends ICreate{
  id: number;
}

