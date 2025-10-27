import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Привет! Я твой личный AI-консультант. Помогу тебе с твоим запросом' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const products = [
    { name: 'Сыворотка с витамином C', brand: 'Dior', price: '4 990 ₽', rating: 4.8 },
    { name: 'Матовая помада Rouge', brand: 'Chanel', price: '3 200 ₽', rating: 4.9 },
    { name: 'Увлажняющий крем', brand: 'Lancôme', price: '5 400 ₽', rating: 4.7 },
    { name: 'Тушь для ресниц', brand: 'YSL', price: '2 800 ₽', rating: 4.8 },
    { name: 'Тональный крем', brand: 'Estée Lauder', price: '4 200 ₽', rating: 4.6 },
    { name: 'Палетка теней', brand: 'MAC', price: '3 900 ₽', rating: 4.9 }
  ];

  const brands = ['Dior', 'Chanel', 'Lancôme', 'Estée Lauder', 'YSL', 'MAC'];

  const reviews = [
    { author: 'Анна К.', rating: 5, text: 'Отличный магазин! Помогли подобрать идеальный оттенок.' },
    { author: 'Мария С.', rating: 5, text: 'Виртуальная примерка работает отлично.' },
    { author: 'Елена П.', rating: 4, text: 'Большой выбор брендов, качество на высоте!' }
  ];

  const aiResponses = [
    'Для вашего типа кожи рекомендую сыворотку с витамином C.',
    'Этот оттенок помады идеально подойдет!',
    'Попробуйте нашу новую коллекцию от Dior.',
    'Для дневного макияжа советую легкую BB-крем основу.'
  ];

  const sendMessage = () => {
    if (!inputMessage.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', text: inputMessage }]);
    setInputMessage('');
    
    setTimeout(() => {
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      setMessages(prev => [...prev, { role: 'ai', text: randomResponse }]);
    }, 800);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="container mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold tracking-tight">Золотое Яблоко</h1>
            
            <div className="hidden md:flex gap-8 text-sm">
              <button onClick={() => scrollToSection('catalog')} className="hover:opacity-60 transition-opacity">Каталог</button>
              <button onClick={() => scrollToSection('brands')} className="hover:opacity-60 transition-opacity">Бренды</button>
              <button onClick={() => scrollToSection('reviews')} className="hover:opacity-60 transition-opacity">Отзывы</button>
            </div>

            <Button 
              onClick={() => setChatOpen(true)}
              variant="outline"
              size="sm"
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
            >ИИ-помощник</Button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <section className="py-24 px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 border border-gray-900 text-xs tracking-wider">
                  AI ТЕХНОЛОГИИ
                </div>
                <h2 className="text-5xl md:text-6xl font-light leading-tight tracking-tight">
                  Виртуальная<br />примерка<br />макияжа
                </h2>
                <p className="text-gray-600 text-lg">
                  Подбирайте косметику с помощью искусственного интеллекта
                </p>
                <div className="flex gap-4 pt-4">
                  <Button 
                    size="lg"
                    onClick={() => setCameraOpen(true)}
                    className="bg-gray-900 hover:bg-gray-800"
                  >
                    Примерить
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => scrollToSection('catalog')}
                  >Поддержка</Button>
                </div>
              </div>
              <div>
                <img 
                  src="https://cdn.poehali.dev/files/fa7e3b3b-c4ac-4e4a-b6dd-690eae6a36cc.jpg"
                  alt="Косметика"
                  className="w-full rounded-sm"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="catalog" className="py-24 px-8 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-16">
              <h2 className="text-4xl font-light tracking-tight mb-3">Каталог</h2>
              <p className="text-gray-600">Популярные товары</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {products.map((product, idx) => (
                <div key={idx} className="group">
                  <div className="aspect-square bg-gray-100 mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                      💄
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{product.brand}</p>
                    <h3 className="font-medium">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-light">{product.price}</p>
                      <div className="flex items-center gap-1 text-xs text-gray-600">
                        <Icon name="Star" size={12} className="fill-gray-900 text-gray-900" />
                        {product.rating}
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full mt-4 border-gray-900 hover:bg-gray-900 hover:text-white"
                    size="sm"
                  >
                    В корзину
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="brands" className="py-24 px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-16">
              <h2 className="text-4xl font-light tracking-tight mb-3">Бренды</h2>
              <p className="text-gray-600">Премиум производители</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {brands.map((brand, idx) => (
                <button
                  key={idx}
                  className="aspect-square border border-gray-200 hover:border-gray-900 transition-colors flex items-center justify-center text-sm font-medium"
                >
                  {brand}
                </button>
              ))}
            </div>

            <div className="mt-16">
              <img 
                src="https://cdn.poehali.dev/projects/3b29489d-e6c0-404b-b837-b767edeb2875/files/acd05e6a-7d46-4380-a41d-8186eb556e8f.jpg"
                alt="Бренды"
                className="w-full rounded-sm"
              />
            </div>
          </div>
        </section>

        <section id="reviews" className="py-24 px-8 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-16">
              <h2 className="text-4xl font-light tracking-tight mb-3">Отзывы</h2>
              <p className="text-gray-600">Мнения клиентов</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((review, idx) => (
                <Card key={idx} className="border-gray-200">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={14} className="fill-gray-900 text-gray-900" />
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{review.text}</p>
                    <p className="text-sm text-gray-500">— {review.author}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {chatOpen && (
        <div className="fixed inset-0 bg-black/20 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-lg h-[600px] flex flex-col shadow-2xl">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <Icon name="Sparkles" size={18} />
                  </div>
                  <div>
                    <h3 className="font-medium">AI Консультант</h3>
                    <p className="text-xs text-gray-500">Онлайн</p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setChatOpen(false)}
                >
                  <Icon name="X" size={18} />
                </Button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}
                >
                  {msg.role === 'ai' && (
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-gray-900 text-white text-xs">AI</AvatarFallback>
                    </Avatar>
                  )}
                  <div 
                    className={`max-w-[75%] p-3 rounded-lg text-sm ${
                      msg.role === 'ai' 
                        ? 'bg-gray-100' 
                        : 'bg-gray-900 text-white'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            <div className="p-6 border-t">
              <div className="flex gap-2">
                <Input 
                  placeholder="Ваш вопрос..." 
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  className="border-gray-300"
                />
                <Button 
                  onClick={sendMessage}
                  size="icon"
                  className="bg-gray-900 hover:bg-gray-800"
                >
                  <Icon name="Send" size={16} />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {cameraOpen && (
        <div className="fixed inset-0 bg-black/20 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-3xl shadow-2xl">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon name="Camera" size={20} />
                  <h3 className="font-medium">Виртуальная примерка</h3>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setCameraOpen(false)}
                >
                  <Icon name="X" size={18} />
                </Button>
              </div>
            </div>

            <CardContent className="p-8">
              <div className="aspect-video bg-gray-100 rounded-sm flex flex-col items-center justify-center gap-6 relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/3b29489d-e6c0-404b-b837-b767edeb2875/files/0784fd0a-45cc-4cdb-be28-bbada282c487.jpg"
                  alt="AI камера"
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="relative z-10 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gray-900 flex items-center justify-center">
                    <Icon name="Camera" size={28} className="text-white" />
                  </div>
                  <h4 className="text-2xl font-light">Наведите камеру на лицо</h4>
                  <p className="text-gray-600 max-w-md text-sm">
                    AI распознает черты лица и подберет подходящие оттенки
                  </p>
                  <div className="flex gap-3 justify-center pt-4">
                    <Button className="bg-gray-900 hover:bg-gray-800">
                      <Icon name="Video" size={16} />
                      Включить камеру
                    </Button>
                    <Button variant="outline">
                      <Icon name="Upload" size={16} />
                      Загрузить фото
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3 mt-6">
                {['Помады', 'Тени', 'Румяна', 'Тональные'].map((item, idx) => (
                  <Button 
                    key={idx} 
                    variant="outline" 
                    size="sm"
                    className="hover:bg-gray-900 hover:text-white"
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <footer className="border-t border-gray-200 py-12 px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 text-sm">
            <div>
              <h3 className="font-medium mb-4">Золотое Яблоко</h3>
              <p className="text-gray-600 text-xs leading-relaxed">Премиум косметика с технологиями будущего</p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-600 text-xs">
                <li>Макияж</li>
                <li>Уход за кожей</li>
                <li>Парфюмерия</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-600 text-xs">
                <li>О нас</li>
                <li>Доставка</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Связь</h4>
              <ul className="space-y-2 text-gray-600 text-xs">
                <li>+7 495 123-45-67</li>
                <li>info@goldapple.ru</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-xs text-gray-500">
            © 2024 Золотое Яблоко
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;