import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [chatOpen, setChatOpen] = useState(false);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Привет! Я AI-консультант Золотого Яблока. Помогу подобрать косметику!' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const brands = [
    { name: 'Dior', products: 247, logo: '💄' },
    { name: 'Chanel', products: 189, logo: '✨' },
    { name: 'Lancôme', products: 156, logo: '🌸' },
    { name: 'Estée Lauder', products: 203, logo: '💎' },
    { name: 'YSL', products: 134, logo: '🎨' },
    { name: 'MAC', products: 312, logo: '💋' }
  ];

  const products = [
    { name: 'Сыворотка с витамином C', price: '4 990 ₽', rating: 4.8, category: 'Уход' },
    { name: 'Матовая помада Rouge Dior', price: '3 200 ₽', rating: 4.9, category: 'Макияж' },
    { name: 'Увлажняющий крем Hydra Life', price: '5 400 ₽', rating: 4.7, category: 'Уход' },
    { name: 'Тушь для ресниц Hypnôse', price: '2 800 ₽', rating: 4.8, category: 'Макияж' }
  ];

  const reviews = [
    { author: 'Анна К.', rating: 5, text: 'Отличный магазин! Консультанты помогли подобрать идеальный оттенок.', product: 'Тональный крем' },
    { author: 'Мария С.', rating: 5, text: 'Виртуальная примерка - это нечто! Теперь всегда знаю, как будет выглядеть.', product: 'Помада' },
    { author: 'Елена П.', rating: 4, text: 'Большой выбор брендов, быстрая доставка, качество на высоте!', product: 'Сыворотка' }
  ];

  const aiResponses = [
    'Для вашего типа кожи рекомендую сыворотку с гиалуроновой кислотой и витамином C.',
    'Этот оттенок помады идеально подойдет к вашему тону кожи!',
    'Попробуйте нашу новую коллекцию от Dior - там есть идеальные варианты.',
    'Для дневного макияжа советую легкую BB-крем основу.',
    'Ваша корзина: Сыворотка Lancôme + Помада Dior. Итого: 8190₽'
  ];

  const sendMessage = () => {
    if (!inputMessage.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', text: inputMessage }]);
    setInputMessage('');
    
    setTimeout(() => {
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      setMessages(prev => [...prev, { role: 'ai', text: randomResponse }]);
    }, 1000);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-3xl">🍎</div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Золотое Яблоко
              </h1>
            </div>
            
            <div className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'catalog', label: 'Каталог', icon: 'ShoppingBag' },
                { id: 'brands', label: 'Бренды', icon: 'Star' },
                { id: 'reviews', label: 'Отзывы', icon: 'MessageCircle' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    activeSection === item.id 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon name={item.icon} size={18} />
                  {item.label}
                </button>
              ))}
            </div>

            <Button 
              onClick={() => setChatOpen(true)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <Icon name="Sparkles" size={18} />
              AI Консультант
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <section id="home" className="min-h-screen flex items-center">
          <div className="container mx-auto px-6 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  Технологии будущего в косметике
                </Badge>
                <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                  Виртуальная примерка с <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">AI</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Подбирайте косметику с помощью искусственного интеллекта и виртуальной камеры
                </p>
                <div className="flex gap-4">
                  <Button 
                    size="lg"
                    onClick={() => setCameraOpen(true)}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg"
                  >
                    <Icon name="Camera" size={20} />
                    Примерить сейчас
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => scrollToSection('catalog')}>
                    <Icon name="ShoppingCart" size={20} />
                    Каталог
                  </Button>
                </div>
              </div>
              <div className="animate-scale-in">
                <img 
                  src="https://cdn.poehali.dev/projects/3b29489d-e6c0-404b-b837-b767edeb2875/files/54467f34-c14c-4bd0-8518-b9c64d502f2a.jpg"
                  alt="Косметика"
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="catalog" className="min-h-screen py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Популярные товары
              </h2>
              <p className="text-xl text-gray-600">Выбор покупателей этого месяца</p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="makeup">Макияж</TabsTrigger>
                <TabsTrigger value="care">Уход</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="grid md:grid-cols-4 gap-6">
                {products.map((product, idx) => (
                  <Card key={idx} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up">
                    <CardContent className="p-6 space-y-4">
                      <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center text-6xl">
                        💄
                      </div>
                      <div>
                        <Badge className="mb-2">{product.category}</Badge>
                        <h3 className="font-semibold text-lg">{product.name}</h3>
                        <div className="flex items-center gap-2 my-2">
                          <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-gray-600">{product.rating}</span>
                        </div>
                        <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          {product.price}
                        </p>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                        <Icon name="ShoppingCart" size={16} />
                        В корзину
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="brands" className="min-h-screen py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Премиум бренды
              </h2>
              <p className="text-xl text-gray-600">Ведущие мировые производители косметики</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {brands.map((brand, idx) => (
                <Card key={idx} className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer animate-scale-in">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="text-6xl mb-4">{brand.logo}</div>
                    <h3 className="text-2xl font-bold">{brand.name}</h3>
                    <p className="text-gray-600">{brand.products} товаров</p>
                    <Button variant="outline" className="w-full group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:text-white transition-all">
                      Смотреть каталог
                      <Icon name="ArrowRight" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <img 
                src="https://cdn.poehali.dev/projects/3b29489d-e6c0-404b-b837-b767edeb2875/files/acd05e6a-7d46-4380-a41d-8186eb556e8f.jpg"
                alt="Бренды"
                className="rounded-3xl shadow-2xl mx-auto max-w-4xl"
              />
            </div>
          </div>
        </section>

        <section id="reviews" className="min-h-screen py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Отзывы клиентов
              </h2>
              <p className="text-xl text-gray-600">Что говорят о нас</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((review, idx) => (
                <Card key={idx} className="hover:shadow-xl transition-all duration-300 animate-fade-in">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback className="bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                          {review.author[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{review.author}</h4>
                        <div className="flex gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Icon key={i} name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">{review.text}</p>
                    <Badge variant="outline">{review.product}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {chatOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
          <Card className="w-full max-w-2xl h-[600px] flex flex-col animate-scale-in">
            <div className="p-6 border-b bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Icon name="Sparkles" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">AI Консультант</h3>
                    <p className="text-sm text-white/80">Онлайн</p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setChatOpen(false)}
                  className="text-white hover:bg-white/20"
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex gap-3 animate-fade-in ${msg.role === 'user' ? 'justify-end' : ''}`}
                >
                  {msg.role === 'ai' && (
                    <Avatar>
                      <AvatarFallback className="bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                        AI
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div 
                    className={`max-w-[70%] p-4 rounded-2xl ${
                      msg.role === 'ai' 
                        ? 'bg-gray-100' 
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.role === 'user' && (
                    <Avatar>
                      <AvatarFallback>Вы</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            <div className="p-6 border-t">
              <div className="flex gap-2">
                <Input 
                  placeholder="Напишите сообщение..." 
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <Button 
                  onClick={sendMessage}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  <Icon name="Send" size={18} />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {cameraOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
          <Card className="w-full max-w-4xl animate-scale-in">
            <div className="p-6 border-b bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon name="Camera" size={24} />
                  <h3 className="font-bold text-xl">Виртуальная примерка</h3>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setCameraOpen(false)}
                  className="text-white hover:bg-white/20"
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>
            </div>

            <CardContent className="p-8">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex flex-col items-center justify-center gap-6 relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/3b29489d-e6c0-404b-b837-b767edeb2875/files/0784fd0a-45cc-4cdb-be28-bbada282c487.jpg"
                  alt="AI камера"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center animate-pulse">
                    <Icon name="Camera" size={40} className="text-white" />
                  </div>
                  <h4 className="text-2xl font-bold">Наведите камеру на лицо</h4>
                  <p className="text-gray-600 max-w-md">
                    AI автоматически распознает ваши черты и подберет подходящие оттенки косметики
                  </p>
                  <div className="flex gap-4 justify-center pt-4">
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      <Icon name="Video" size={18} />
                      Включить камеру
                    </Button>
                    <Button variant="outline">
                      <Icon name="Upload" size={18} />
                      Загрузить фото
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 mt-6">
                {['Помады', 'Тени', 'Румяна', 'Тональные'].map((item, idx) => (
                  <Button key={idx} variant="outline" className="hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white">
                    {item}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-3xl">🍎</div>
                <h3 className="text-xl font-bold">Золотое Яблоко</h3>
              </div>
              <p className="text-gray-400">Премиум косметика с технологиями будущего</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Макияж</li>
                <li>Уход за кожей</li>
                <li>Парфюмерия</li>
                <li>Волосы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Доставка</li>
                <li>Гарантии</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Связь</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@goldapple.ru</li>
                <li>Пн-Вс: 9:00 - 21:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Золотое Яблоко. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
