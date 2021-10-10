interface Item {
  id: number
  title: string
  progress: string
}

interface Data {
  id: number
  title: string
  color: string
  items: Item[]
}

export const data: Data[] = [
  {
    id: 1,
    title: 'Space21 rules and policies',
    color: 'danger',
    items: [
      {id: 1, title: 'Space21 rules and policies Agenda', progress: 'To do'},
      {id: 2, title: 'Xurshed', progress: 'To do'},
      {id: 3, title: 'Maraim', progress: 'To do'},
    ],
  },
  {
    id: 2,
    title: 'Doing',
    color: 'primary',
    items: [
      {id: 4, title: 'Space21 rules and policies Agenda', progress: 'Doing'},
      {id: 5, title: 'Bye Bye', progress: 'Doing'},
    ],
  },
  {
    id: 3,
    title: 'Review',
    color: 'warning',
    items: [{id: 6, title: 'Space21 rules and policies Agenda', progress: 'Review'}],
  },
]
