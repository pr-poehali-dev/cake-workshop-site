import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const masterclasses = [
  {
    id: 1,
    title: 'Макаронс для начинающих',
    description: 'Научитесь создавать нежнейшие французские макаронс с хрустящей корочкой',
    duration: '3 часа',
    price: 4500,
    image: 'https://cdn.poehali.dev/projects/fe4a628d-f10a-403a-845b-d1e4ef5cfd16/files/ad549a84-1f3c-4da3-9734-42d6f3ec0c9b.jpg'
  },
  {
    id: 2,
    title: 'Торт "Красный бархат"',
    description: 'Классический американский торт с кремчиз кремом',
    duration: '4 часа',
    price: 5500,
    image: 'https://cdn.poehali.dev/projects/fe4a628d-f10a-403a-845b-d1e4ef5cfd16/files/1d08a36c-8c9f-4ed1-ac48-b0732ee4dfd0.jpg'
  },
  {
    id: 3,
    title: 'Эклеры и профитроли',
    description: 'Секреты идеального заварного теста и кремов',
    duration: '3.5 часа',
    price: 4800,
    image: 'https://cdn.poehali.dev/projects/fe4a628d-f10a-403a-845b-d1e4ef5cfd16/files/ad549a84-1f3c-4da3-9734-42d6f3ec0c9b.jpg'
  },
  {
    id: 4,
    title: 'Капкейки с декором',
    description: 'Мастер-класс по созданию и украшению капкейков',
    duration: '2.5 часа',
    price: 3500,
    image: 'https://cdn.poehali.dev/projects/fe4a628d-f10a-403a-845b-d1e4ef5cfd16/files/d34c0426-d23d-4f2b-89e0-531c80171844.jpg'
  }
];

const teachers = [
  {
    name: 'Анна Сергеева',
    specialty: 'Французская кондитерская',
    experience: '12 лет',
    photo: '/placeholder.svg'
  },
  {
    name: 'Мария Иванова',
    specialty: 'Декорирование тортов',
    experience: '8 лет',
    photo: '/placeholder.svg'
  },
  {
    name: 'Елена Петрова',
    specialty: 'Классические десерты',
    experience: '15 лет',
    photo: '/placeholder.svg'
  }
];

const reviews = [
  {
    name: 'Ольга',
    text: 'Замечательный мастер-класс! Всё понятно объяснили, атмосфера очень тёплая',
    rating: 5
  },
  {
    name: 'Дарья',
    text: 'Макаронс получились с первого раза! Спасибо за терпение и профессионализм',
    rating: 5
  },
  {
    name: 'Светлана',
    text: 'Отличная школа, преподаватели - настоящие мастера своего дела',
    rating: 5
  }
];

const galleryImages = [
  'https://cdn.poehali.dev/projects/fe4a628d-f10a-403a-845b-d1e4ef5cfd16/files/ad549a84-1f3c-4da3-9734-42d6f3ec0c9b.jpg',
  'https://cdn.poehali.dev/projects/fe4a628d-f10a-403a-845b-d1e4ef5cfd16/files/1d08a36c-8c9f-4ed1-ac48-b0732ee4dfd0.jpg',
  'https://cdn.poehali.dev/projects/fe4a628d-f10a-403a-845b-d1e4ef5cfd16/files/d34c0426-d23d-4f2b-89e0-531c80171844.jpg',
  'https://cdn.poehali.dev/projects/fe4a628d-f10a-403a-845b-d1e4ef5cfd16/files/ad549a84-1f3c-4da3-9734-42d6f3ec0c9b.jpg',
  'https://cdn.poehali.dev/projects/fe4a628d-f10a-403a-845b-d1e4ef5cfd16/files/1d08a36c-8c9f-4ed1-ac48-b0732ee4dfd0.jpg',
  'https://cdn.poehali.dev/projects/fe4a628d-f10a-403a-845b-d1e4ef5cfd16/files/d34c0426-d23d-4f2b-89e0-531c80171844.jpg'
];

export default function Index() {
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const { toast } = useToast();

  const timeSlots = ['10:00', '13:00', '15:00', '18:00'];

  const handleBooking = () => {
    if (!date || !selectedTime || !selectedClass || !formData.name || !formData.phone) {
      toast({
        title: 'Заполните все поля',
        description: 'Пожалуйста, укажите дату, время и контактные данные',
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время для подтверждения записи',
    });
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-pink-100 shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-primary">SweetArt</h1>
          <div className="hidden md:flex gap-6">
            <a href="#classes" className="text-foreground/70 hover:text-primary transition">Мастер-классы</a>
            <a href="#gallery" className="text-foreground/70 hover:text-primary transition">Галерея</a>
            <a href="#teachers" className="text-foreground/70 hover:text-primary transition">Преподаватели</a>
            <a href="#reviews" className="text-foreground/70 hover:text-primary transition">Отзывы</a>
            <a href="#prices" className="text-foreground/70 hover:text-primary transition">Цены</a>
            <a href="#contacts" className="text-foreground/70 hover:text-primary transition">Контакты</a>
          </div>
        </nav>
      </header>

      <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50 py-24 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 text-foreground animate-fade-in">
            Искусство кондитера
          </h2>
          <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-2xl mx-auto animate-fade-in">
            Откройте для себя мир вкуса и творчества на наших мастер-классах
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all animate-scale-in">
                <Icon name="CalendarDays" className="mr-2" size={20} />
                Записаться на мастер-класс
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">Онлайн-запись</DialogTitle>
                <DialogDescription>Выберите дату, время и мастер-класс</DialogDescription>
              </DialogHeader>
              <div className="grid gap-6 py-4">
                <div className="space-y-2">
                  <Label>Мастер-класс</Label>
                  <Select value={selectedClass} onValueChange={setSelectedClass}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите мастер-класс" />
                    </SelectTrigger>
                    <SelectContent>
                      {masterclasses.map((mc) => (
                        <SelectItem key={mc.id} value={mc.id.toString()}>
                          {mc.title} - {mc.price}₽
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Дата</Label>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                    disabled={(date) => date < new Date()}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Время</Label>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите время" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ваше имя"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email (необязательно)</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@mail.com"
                  />
                </div>

                <Button onClick={handleBooking} size="lg" className="w-full">
                  Отправить заявку
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      <section id="classes" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-5xl font-bold text-center mb-12">Наши мастер-классы</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {masterclasses.map((mc) => (
              <Card key={mc.id} className="hover:shadow-xl transition-all duration-300 border-2 border-pink-100 hover:border-primary/50">
                <img src={mc.image} alt={mc.title} className="w-full h-48 object-cover rounded-t-lg" />
                <CardHeader>
                  <CardTitle className="text-2xl">{mc.title}</CardTitle>
                  <CardDescription>{mc.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Icon name="Clock" size={16} />
                    <span>{mc.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-semibold text-xl">
                    <Icon name="Wallet" size={16} />
                    <span>{mc.price}₽</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h3 className="text-5xl font-bold text-center mb-12">Галерея работ</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="aspect-square overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform">
                <img src={img} alt={`Работа ${idx + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="teachers" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-5xl font-bold text-center mb-12">Наши преподаватели</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teachers.map((teacher, idx) => (
              <Card key={idx} className="text-center border-2 border-pink-100 hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    <img src={teacher.photo} alt={teacher.name} className="w-32 h-32 rounded-full object-cover border-4 border-primary/20" />
                  </div>
                  <CardTitle className="text-2xl">{teacher.name}</CardTitle>
                  <CardDescription className="text-lg">{teacher.specialty}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Опыт: {teacher.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-accent/50">
        <div className="container mx-auto px-4">
          <h3 className="text-5xl font-bold text-center mb-12">Отзывы учеников</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <Card key={idx} className="border-2 border-pink-100">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <CardTitle className="text-xl">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-5xl font-bold text-center mb-12">Цены</h3>
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-pink-100">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {masterclasses.map((mc) => (
                    <div key={mc.id} className="flex justify-between items-center pb-4 border-b border-pink-100 last:border-0">
                      <div>
                        <h4 className="font-semibold text-lg">{mc.title}</h4>
                        <p className="text-sm text-muted-foreground">{mc.duration}</p>
                      </div>
                      <span className="text-2xl font-bold text-primary">{mc.price}₽</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h3 className="text-5xl font-bold text-center mb-12">Контакты</h3>
          <div className="max-w-xl mx-auto">
            <Card className="border-2 border-pink-100">
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="contact-name">Имя</Label>
                    <Input id="contact-name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="contact-phone">Телефон</Label>
                    <Input id="contact-phone" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div>
                    <Label htmlFor="contact-message">Сообщение</Label>
                    <Textarea id="contact-message" placeholder="Ваш вопрос или пожелание" rows={4} />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" className="mr-2" size={16} />
                    Отправить
                  </Button>
                </form>
                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3 text-foreground/70">
                    <Icon name="MapPin" size={20} className="text-primary" />
                    <span>г. Москва, ул. Кондитерская, д. 15</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground/70">
                    <Icon name="Phone" size={20} className="text-primary" />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground/70">
                    <Icon name="Mail" size={20} className="text-primary" />
                    <span>info@sweetart.ru</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">© 2024 SweetArt. Кондитерская мастерская</p>
          <p className="text-sm text-white/70 mt-2">Создаём сладкие шедевры вместе</p>
        </div>
      </footer>
    </div>
  );
}