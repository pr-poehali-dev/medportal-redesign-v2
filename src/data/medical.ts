export const specialties = [
  { name: 'Терапевт', icon: 'Stethoscope' },
  { name: 'Кардиолог', icon: 'HeartPulse' },
  { name: 'Невролог', icon: 'Brain' },
  { name: 'Офтальмолог', icon: 'Eye' },
  { name: 'Стоматолог', icon: 'Smile' },
  { name: 'Гинеколог', icon: 'Venus' },
  { name: 'Уролог', icon: 'Mars' },
  { name: 'Дерматолог', icon: 'Hand' },
  { name: 'Эндокринолог', icon: 'Pill' },
  { name: 'Хирург', icon: 'Scissors' },
  { name: 'Лор', icon: 'Ear' },
  { name: 'Педиатр', icon: 'Baby' },
];

export const metroByClinic: Record<string, string[]> = {
  'Клиника Здоровье': ['Тверская', 'Пушкинская'],
  'МедЦентр Плюс': ['Сокол', 'Аэропорт'],
  'Медика Групп': ['Китай-город', 'Лубянка'],
  'СитиМед': ['Парк культуры', 'Фрунзенская'],
};

export interface DoctorPrice {
  clinic: number;
  clinicOld?: number;
  home: number;
  homeOld?: number;
}

export interface Doctor {
  id: number;
  name: string;
  photo: string;
  specialty: string[];
  rating: number;
  reviews: number;
  experience: string;
  category: string;
  prices: DoctorPrice;
  phone: string;
  about: string;
}

export const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Смирнова Елена Викторовна',
    photo: 'https://cdn.poehali.dev/projects/a0d2824d-f773-4228-be97-e4cd923790fe/files/6fec45c1-e7af-4f08-a274-634d6446b8c3.jpg',
    specialty: ['Кардиолог', 'Терапевт'],
    rating: 5,
    reviews: 248,
    experience: '15 лет',
    category: 'Высшая категория',
    prices: { clinic: 2500, clinicOld: 3200, home: 4500 },
    phone: '+7 (495) 123-45-67',
    about: 'Кандидат медицинских наук. Специализируется на диагностике и лечении сердечно-сосудистых заболеваний, ведёт пациентов с гипертонией и аритмией.',
  },
  {
    id: 2,
    name: 'Петров Дмитрий Сергеевич',
    photo: 'https://cdn.poehali.dev/projects/a0d2824d-f773-4228-be97-e4cd923790fe/files/6fec45c1-e7af-4f08-a274-634d6446b8c3.jpg',
    specialty: ['Невролог'],
    rating: 5,
    reviews: 187,
    experience: '12 лет',
    category: 'Высшая категория',
    prices: { clinic: 2200, home: 4000, homeOld: 5000 },
    phone: '+7 (495) 234-56-78',
    about: 'Опытный невролог, специалист по лечению головных болей, остеохондроза и нарушений сна. Использует современные методы диагностики.',
  },
  {
    id: 3,
    name: 'Иванова Анна Николаевна',
    photo: 'https://cdn.poehali.dev/projects/a0d2824d-f773-4228-be97-e4cd923790fe/files/6fec45c1-e7af-4f08-a274-634d6446b8c3.jpg',
    specialty: ['Терапевт', 'Эндокринолог'],
    rating: 4,
    reviews: 156,
    experience: '9 лет',
    category: 'Первая категория',
    prices: { clinic: 1900, clinicOld: 2400, home: 3500, homeOld: 4200 },
    phone: '+7 (495) 345-67-89',
    about: 'Терапевт широкого профиля. Ведёт комплексное наблюдение пациентов, занимается профилактикой и лечением эндокринных нарушений.',
  },
  {
    id: 4,
    name: 'Козлов Артём Игоревич',
    photo: 'https://cdn.poehali.dev/projects/a0d2824d-f773-4228-be97-e4cd923790fe/files/6fec45c1-e7af-4f08-a274-634d6446b8c3.jpg',
    specialty: ['Офтальмолог'],
    rating: 5,
    reviews: 203,
    experience: '18 лет',
    category: 'Высшая категория',
    prices: { clinic: 2800, home: 5000 },
    phone: '+7 (495) 456-78-90',
    about: 'Врач-офтальмолог высшей категории. Проводит полную диагностику зрения, подбор линз и лечение заболеваний глаз.',
  },
];

export const reviews14 = Array.from({ length: 14 }).map((_, i) => ({
  id: i + 1,
  name: ['Анна М.', 'Дмитрий К.', 'Ольга В.', 'Игорь П.', 'Мария С.', 'Сергей Л.', 'Татьяна Р.'][i % 7],
  doctor: ['Кардиолог Смирнова Е.В.', 'Невролог Петров Д.С.', 'Терапевт Иванова А.Н.', 'Офтальмолог Козлов А.И.'][i % 4],
  text: [
    'Внимательный врач, всё подробно объяснил и назначил эффективное лечение.',
    'Профессионал своего дела. Помог справиться с давней проблемой.',
    'Очень довольна приёмом. Доброжелательное отношение и грамотный подход.',
    'Записалась онлайн за минуту, врач принял точно в назначенное время.',
  ][i % 4],
  rating: 5,
  date: `${(i % 28) + 1}.06.2026`,
}));

export interface Clinic {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  address: string;
  metro: string[];
  phone: string;
  hours: string;
  services: number;
}

export const clinics: Clinic[] = [
  { id: 1, name: 'Клиника Здоровье', rating: 5, reviews: 1240, address: 'ул. Тверская, 15', metro: ['Тверская', 'Пушкинская'], phone: '+7 (495) 111-22-33', hours: 'Круглосуточно', services: 320 },
  { id: 2, name: 'МедЦентр Плюс', rating: 5, reviews: 980, address: 'Ленинградский пр-т, 40', metro: ['Сокол', 'Аэропорт'], phone: '+7 (495) 222-33-44', hours: '08:00 — 21:00', services: 280 },
  { id: 3, name: 'Медика Групп', rating: 4, reviews: 760, address: 'ул. Маросейка, 7', metro: ['Китай-город', 'Лубянка'], phone: '+7 (495) 333-44-55', hours: '07:00 — 22:00', services: 410 },
  { id: 4, name: 'СитиМед', rating: 5, reviews: 1530, address: 'Комсомольский пр-т, 28', metro: ['Парк культуры', 'Фрунзенская'], phone: '+7 (495) 444-55-66', hours: 'Круглосуточно', services: 350 },
];

export const diagCenters: Clinic[] = [
  { id: 1, name: 'Центр Диагностики МРТ24', rating: 5, reviews: 890, address: 'ул. Новый Арбат, 21', metro: ['Арбатская', 'Смоленская'], phone: '+7 (495) 555-66-77', hours: 'Круглосуточно', services: 120 },
  { id: 2, name: 'ЛабСкан Экспертиза', rating: 5, reviews: 670, address: 'Ленинский пр-т, 90', metro: ['Проспект Вернадского'], phone: '+7 (495) 666-77-88', hours: '07:00 — 23:00', services: 95 },
  { id: 3, name: 'ТомоЦентр', rating: 4, reviews: 540, address: 'Каширское ш., 24', metro: ['Каширская'], phone: '+7 (495) 777-88-99', hours: '08:00 — 20:00', services: 80 },
];

export const diagnosticCategories = [
  { category: 'УЗИ (ультразвуковое исследование)', icon: 'Waves', services: ['печени', 'поджелудочной железы', 'почек', 'щитовидной железы', 'органов малого таза', 'молочных желёз'] },
  { category: 'МРТ (магнитно-резонансная томография)', icon: 'ScanLine', services: ['головного мозга', 'позвоночника', 'суставов', 'брюшной полости', 'мягких тканей'] },
  { category: 'КТ (компьютерная томография)', icon: 'Scan', services: ['лёгких', 'головного мозга', 'придаточных пазух носа', 'органов брюшной полости'] },
  { category: 'Лабораторная диагностика', icon: 'TestTube', services: ['общий анализ крови', 'биохимия крови', 'анализ мочи', 'гормоны', 'аллергопробы'] },
  { category: 'Функциональная диагностика', icon: 'Activity', services: ['ЭКГ', 'холтер-мониторинг', 'спирометрия', 'ЭЭГ'] },
  { category: 'Рентгенография', icon: 'Bone', services: ['грудной клетки', 'костей и суставов', 'позвоночника', 'придаточных пазух'] },
];

export interface MedicalService {
  name: string;
  price: number;
  oldPrice?: number;
  duration: string;
}

export interface ServiceCategory {
  category: string;
  icon: string;
  color: string;
  services: MedicalService[];
}

export const medicalServiceCategories: ServiceCategory[] = [
  {
    category: 'Вызов врача на дом',
    icon: 'House',
    color: 'from-[#00c9a6] to-[#00a88c]',
    services: [
      { name: 'Терапевт на дом', price: 3500, oldPrice: 4200, duration: '40 мин' },
      { name: 'Педиатр на дом', price: 3800, duration: '40 мин' },
      { name: 'Забор анализов на дому', price: 900, duration: '15 мин' },
      { name: 'Капельница на дому', price: 2600, duration: '60 мин' },
    ],
  },
  {
    category: 'Вакцинация',
    icon: 'Syringe',
    color: 'from-[#ffad00] to-[#ff9100]',
    services: [
      { name: 'Вакцинация от гриппа', price: 1200, duration: '15 мин' },
      { name: 'Вакцинация от клещевого энцефалита', price: 2200, duration: '15 мин' },
      { name: 'Вакцинация от COVID-19', price: 1500, duration: '15 мин' },
      { name: 'Консультация перед прививкой', price: 800, duration: '20 мин' },
    ],
  },
  {
    category: 'Справки и медкнижки',
    icon: 'FileText',
    color: 'from-[#00c9a6] to-[#00a88c]',
    services: [
      { name: 'Медицинская справка 086/у', price: 1800, oldPrice: 2200, duration: '1 день' },
      { name: 'Санаторно-курортная карта', price: 2500, duration: '1 день' },
      { name: 'Личная медицинская книжка', price: 3200, duration: '3 дня' },
      { name: 'Справка в бассейн', price: 900, duration: '30 мин' },
    ],
  },
  {
    category: 'Программы чек-ап',
    icon: 'ClipboardCheck',
    color: 'from-[#ffad00] to-[#ff9100]',
    services: [
      { name: 'Чек-ап «Базовый»', price: 6900, oldPrice: 8900, duration: '2 часа' },
      { name: 'Чек-ап «Женское здоровье»', price: 9800, duration: '3 часа' },
      { name: 'Чек-ап «Мужское здоровье»', price: 9500, duration: '3 часа' },
      { name: 'Чек-ап «Премиум»', price: 15900, oldPrice: 19900, duration: '4 часа' },
    ],
  },
  {
    category: 'Массаж и физиотерапия',
    icon: 'Hand',
    color: 'from-[#00c9a6] to-[#00a88c]',
    services: [
      { name: 'Массаж спины', price: 2200, duration: '40 мин' },
      { name: 'Массаж общий', price: 3500, oldPrice: 4000, duration: '60 мин' },
      { name: 'Электрофорез', price: 1100, duration: '20 мин' },
      { name: 'Магнитотерапия', price: 1300, duration: '20 мин' },
    ],
  },
  {
    category: 'Косметология',
    icon: 'Sparkles',
    color: 'from-[#ffad00] to-[#ff9100]',
    services: [
      { name: 'Чистка лица', price: 3200, duration: '60 мин' },
      { name: 'Биоревитализация', price: 7500, oldPrice: 9000, duration: '40 мин' },
      { name: 'Пилинг лица', price: 2800, duration: '45 мин' },
      { name: 'Мезотерапия', price: 6200, duration: '40 мин' },
    ],
  },
  {
    category: 'Стоматология',
    icon: 'Smile',
    color: 'from-[#00c9a6] to-[#00a88c]',
    services: [
      { name: 'Лечение кариеса', price: 4500, duration: '50 мин' },
      { name: 'Профессиональная чистка зубов', price: 3800, oldPrice: 4500, duration: '60 мин' },
      { name: 'Удаление зуба', price: 2800, duration: '30 мин' },
      { name: 'Консультация стоматолога', price: 500, duration: '20 мин' },
    ],
  },
  {
    category: 'Реабилитация',
    icon: 'Activity',
    color: 'from-[#ffad00] to-[#ff9100]',
    services: [
      { name: 'ЛФК индивидуальное занятие', price: 2400, duration: '45 мин' },
      { name: 'Восстановление после травм', price: 3100, duration: '60 мин' },
      { name: 'Кинезиотерапия', price: 2900, duration: '50 мин' },
      { name: 'Механотерапия', price: 1900, duration: '40 мин' },
    ],
  },
];

export const filterGroups = [
  { name: 'Специализация', options: ['Кардиолог', 'Невролог', 'Терапевт', 'Офтальмолог', 'Эндокринолог'] },
  { name: 'Категория врача', options: ['Высшая категория', 'Первая категория', 'Вторая категория'] },
  { name: 'Стаж', options: ['до 5 лет', '5–10 лет', 'более 10 лет'] },
  { name: 'Цена приёма', options: ['до 2000 ₽', '2000–3000 ₽', 'более 3000 ₽'] },
  { name: 'Метро', options: ['Тверская', 'Сокол', 'Китай-город', 'Парк культуры'] },
];

export const clinicFilterGroups = [
  { name: 'Район', options: ['Центральный', 'Северный', 'Южный', 'Западный'] },
  { name: 'Рейтинг', options: ['от 4.5', 'от 4.0', 'от 3.5'] },
  { name: 'Режим работы', options: ['Круглосуточно', 'До 22:00', 'Выходные'] },
  { name: 'Метро', options: ['Тверская', 'Сокол', 'Китай-город', 'Парк культуры'] },
];

export const clinicSlots = ['Клиника Здоровье', 'МедЦентр Плюс', 'Медика Групп', 'СитиМед'];
export const dates = ['Сегодня', '26 июн', '27 июн', '28 июн', '29 июн'];
export const timeSlots = ['09:00', '10:30', '12:00', '14:00', '15:30', '17:00', '18:30'];