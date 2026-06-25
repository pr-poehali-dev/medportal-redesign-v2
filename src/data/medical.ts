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

export interface Doctor {
  id: number;
  name: string;
  photo: string;
  specialty: string[];
  rating: number;
  reviews: number;
  experience: string;
  category: string;
  price: number;
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
    price: 2500,
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
    price: 2200,
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
    price: 1900,
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
    price: 2800,
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
