import {
  User,
  MessageSquare,
  Home,
  Calendar,
  Mail,
  Briefcase,
  Bookmark,
  Image,
  Users,
  ShoppingBag,
} from 'react-feather';
import user from 'assets/images/user.png';
import user2 from 'assets/images/users/user2.jpg';
import user3 from 'assets/images/users/user3.jpg';
import user4 from 'assets/images/users/user4.jpg';
import user5 from 'assets/images/users/user5.jpg';
import user6 from 'assets/images/users/user6.jpg';

export const notifications = [
  {
    id: 1,
    text: 'Новый пользователь',
    subText: '1 мин назад',
    icon: <User />,
    bgColor: 'primary',
  },
  {
    id: 2,
    text: 'Алина',
    subText: 'Вау! Новая админка выглядит здорово',
    icon: <MessageSquare />,
    bgColor: 'success',
  },
  {
    id: 3,
    text: 'Кристина',
    subText: 'Привет! Я по поводу нашего митапа на той неделе',
    icon: <MessageSquare />,
    bgColor: 'danger',
  },
  {
    id: 4,
    text: 'Новый пользователь',
    subText: '1 день назад',
    icon: <User />,
    bgColor: 'info',
  },
];

export const menu = [
  {
    path: '/dashboard',
    name: 'Панель',
    icon: <Home />,
    header: 'Навигация',
    badge: {
      variant: 'success',
      text: '1',
    },
    id: 1,
    active: false,
  },
  {
    path: '/',
    name: 'Календарь',
    icon: <Calendar />,
    header: 'Приложения',

    id: 2,
    active: false,
  },
  {
    path: '/',
    name: 'Почта',
    icon: <Mail />,
    children: [
      {
        path: '/',
        name: 'Входящие',

        id: 4,
        parentId: 3,
        active: false,
      },
      {
        path: '/',
        name: 'Исходящие',

        id: 5,
        parentId: 3,
        active: false,
      },
      {
        path: '/',
        name: 'Отправить',

        id: 6,
        parentId: 3,
        active: false,
      },
    ],
    id: 3,
    active: false,
  },
  {
    path: '/',
    name: 'Проекты',
    icon: <Briefcase />,
    children: [
      {
        path: '/',
        name: 'Список',
        id: 8,
        parentId: 7,
        active: false,
      },
      {
        path: '/',
        name: 'Детали',
        id: 9,
        parentId: 7,
        active: false,
      },
    ],
    id: 7,
    active: false,
  },
  {
    path: '/',
    name: 'Задачи',
    icon: <Bookmark />,
    children: [
      {
        path: '/',
        name: 'Список',
        id: 11,
        parentId: 10,
        active: false,
      },
      {
        path: '/',
        name: 'Доска',
        id: 12,
        parentId: 10,
        active: false,
      },
    ],
    id: 10,
    active: false,
  },
];

export const overviewItems = [
  { title: '121,000 тыс.', description: 'Тотал клиентов', icon: Users },
  { title: '21,000 тыс.', description: 'Просмотров товара', icon: Image },
  { title: '$21.5', description: 'Ревенью на клиента', icon: ShoppingBag },
];

export const targetData = [
  {
    name: 'Net Profit',
    data: [35, 44, 55, 57, 45, 32, 24],
  },
  {
    name: 'Revenue',
    data: [52, 76, 85, 101, 86, 72, 56],
  },
];

export const orderItems = [
  {
    id: 1,
    product: 'Saint Laurent tshirt',
    customer: 'Dora',
    price: '100',
    status: 'delivered',
  },
  {
    id: 2,
    product: 'Marco Lightweight Shirt',
    customer: 'Mr. Black',
    price: '153',
    status: 'delivered',
  },
  {
    id: 3,
    product: 'Saint Laurent tshirt',
    customer: 'Jhon Smith',
    price: '945',
    status: 'delivered',
  },
  {
    id: 4,
    product: 'Half Sleeve Shirt',
    customer: 'Jhon Doe',
    price: '157',
    status: 'declined',
  },
  {
    id: 5,
    product: 'Lightweight Jacket',
    customer: 'Salma Haek',
    price: '421',
    status: 'pending',
  },
  {
    id: 6,
    product: 'Marco Shoes',
    customer: 'Geegun',
    price: '267',
    status: 'pending',
  },
  {
    id: 7,
    product: 'Saint Laurent tshirt',
    customer: 'Mark Wallberg',
    price: '543',
    status: 'pending',
  },
  {
    id: 8,
    product: 'Saint Laurent tshirt',
    customer: 'Mark Wallberg',
    price: '543',
    status: 'pending',
  },
  {
    id: 9,
    product: 'Saint Laurent tshirt',
    customer: 'Mark Wallberg',
    price: '543',
    status: 'pending',
  },
];

export const topManagers = [
  { id: 1, name: 'Дэн Абрамов', image: user6, position: 'Senior React Dev' },
  {
    id: 2,
    name: 'Анна Д. Армас',
    image: user4,
    position: 'Social Media Campaign',
  },
  { id: 3, name: 'Брайан Дин', image: user3, position: 'Inventory Manager' },
  { id: 4, name: 'Никола Т.', image: user2, position: 'Human Resources' },
  { id: 5, name: 'Джон Дое', image: user5, position: 'Sales Person' },
];

export const tasksItems = [
  {
    id: 1,
    due_date: '23 Янв, 2021 ',
    title: 'Составление нового контрактного документа для отдела продаж',
  },
  {
    id: 2,
    due_date: '24 Янв, 2021',
    title: 'Внедрить новую фичу в админку для просмотра статистики покупок',
  },
  {
    id: 3,
    due_date: '25 Янв, 2021',
    title: 'Настроить аналитику для основного сайта',
  },
  {
    id: 4,
    due_date: '26 Янв, 2021',
    title: 'Задокументировать процесс разработки фичи ',
  },
  {
    id: 5,
    due_date: '27 Янв, 2021',
    title: 'Провести юнит тестирование фичи',
  },
  {
    id: 6,
    due_date: '28 Янв, 2021',
    title: 'Согласовать представление компонента в интерфейсе с дизайнером',
  },
];

export const messages = [
  {
    id: 1,
    userPic: user4,
    userName: 'Сара К.',
    text: 'Привет, Джон! Не знаешь что за придурок с дробовиком за мной гоняется второй день?',
    postedOn: '10:00',
  },
  {
    id: 2,
    userPic: user,
    userName: 'Джон К.',
    text: 'Нет не в курсе',
    postedOn: '10:01',
  },
  {
    id: 3,
    userPic: user4,
    userName: 'Сара К.',
    text: 'Блиин',
    postedOn: '10:02',
  },
  {
    id: 4,
    userPic: user,
    userName: 'Джон К.',
    text: 'А что за тип?',
    postedOn: '10:03',
  },
  {
    id: 5,
    userPic: user4,
    userName: 'Сара К.',
    text: 'В кожанке, увязался возле ларька и до сих пор не отстает!',
    postedOn: '10:03',
  },
  {
    id: 6,
    userPic: user,
    userName: 'Джон К.',
    text: 'Так спроси что ему нужно',
    postedOn: '10:03',
  },
  {
    id: 7,
    userPic: user4,
    userName: 'Сара К.',
    text: 'По-твоему это так просто?!',
    postedOn: '10:03',
  },
  {
    id: 8,
    userPic: user,
    userName: 'Джон К.',
    text: 'Короче, Сара, у меня сроки горят, менеджеры подгоняют и тут еще ты со своим рембо. Разбирайся как знаешь',
    postedOn: '10:03',
  },
];
