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
    { role: 'ai', text: 'Привет! Я AI-консультант. Помогу подобрать косметику!' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const products = [
    { name: 'Сыворотка с витамином C', brand: 'Dior', price: '4 990 ₽', rating: 4.8, color: 'from-lime-100 to-green-100' },
    { name: 'Матовая помада Rouge', brand: 'Chanel', price: '3 200 ₽', rating: 4.9, color: 'from-yellow-100 to-lime-100' },
    { name: 'Увлажняющий крем', brand: 'Lancôme', price: '5 400 ₽', rating: 4.7, color: 'from-green-100 to-emerald-100' },
    { name: 'Тушь для ресниц', brand: 'YSL', price: '2 800 ₽', rating: 4.8, color: 'from-lime-100 to-yellow-100' },
    { name: 'Тональный крем', brand: 'Estée Lauder', price: '4 200 ₽', rating: 4.6, color: 'from-yellow-100 to-green-100' },
    { name: 'Палетка теней', brand: 'MAC', price: '3 900 ₽', rating: 4.9, color: 'from-green-100 to-lime-100' }
  ];

  const brands = [
    { name: 'Dior', color: 'bg-lime-100 hover:bg-lime-200' },
    { name: 'Chanel', color: 'bg-green-100 hover:bg-green-200' },
    { name: 'Lancôme', color: 'bg-yellow-100 hover:bg-yellow-200' },
    { name: 'Estée Lauder', color: 'bg-lime-100 hover:bg-lime-200' },
    { name: 'YSL', color: 'bg-emerald-100 hover:bg-emerald-200' },
    { name: 'MAC', color: 'bg-green-100 hover:bg-green-200' }
  ];

  const reviews = [
    { author: 'Анна К.', rating: 5, text: 'Отличный магазин! Помогли подобрать идеальный оттенок.', avatar: 'bg-lime-200' },
    { author: 'Мария С.', rating: 5, text: 'Виртуальная примерка работает отлично.', avatar: 'bg-green-200' },
    { author: 'Елена П.', rating: 4, text: 'Большой выбор брендов, качество на высоте!', avatar: 'bg-yellow-200' }
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
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-green-50 to-yellow-50">
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-lg z-50 border-b border-lime-200">
        <div className="container mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-2xl">🍏</div>
              <h1 className="text-xl font-medium bg-gradient-to-r from-lime-500 via-green-500 to-yellow-500 bg-clip-text text-transparent">
                Золотое Яблоко
              </h1>
            </div>
            
            <div className="hidden md:flex gap-8 text-sm text-gray-600">
              <button onClick={() => scrollToSection('catalog')} className="hover:text-lime-500 transition-colors">Каталог</button>
              <button onClick={() => scrollToSection('brands')} className="hover:text-green-500 transition-colors">Бренды</button>
              <button onClick={() => scrollToSection('reviews')} className="hover:text-yellow-500 transition-colors">Отзывы</button>
            </div>

            <Button 
              onClick={() => setChatOpen(true)}
              size="sm"
              className="bg-gradient-to-r from-lime-400 to-green-400 hover:from-lime-500 hover:to-green-500 text-gray-900 border-0 shadow-lg shadow-lime-200/50"
            >
              <Icon name="Sparkles" size={14} />
              AI Консультант
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <section className="py-24 px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 animate-fade-in">
                <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-lime-100 to-green-100 text-xs font-medium text-green-700">
                  ✨ AI Технологии
                </div>
                <h2 className="text-5xl md:text-6xl font-light leading-tight tracking-tight bg-gradient-to-r from-lime-500 via-green-500 to-yellow-500 bg-clip-text text-transparent">
                  Виртуальная примерка макияжа
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Подбирайте косметику с помощью искусственного интеллекта и виртуальной камеры
                </p>
                <div className="flex gap-4 pt-4">
                  <Button 
                    size="lg"
                    onClick={() => setCameraOpen(true)}
                    className="bg-gradient-to-r from-lime-400 to-green-400 hover:from-lime-500 hover:to-green-500 text-gray-900 shadow-xl shadow-lime-200/50 rounded-full"
                  >
                    <Icon name="Camera" size={18} />
                    Примерить сейчас
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => scrollToSection('catalog')}
                    className="border-lime-300 text-green-700 hover:bg-lime-50 rounded-full"
                  >
                    <Icon name="ShoppingCart" size={18} />
                    Каталог
                  </Button>
                </div>
              </div>
              <div className="animate-scale-in">
                <img 
                  src="https://cdn.poehali.dev/projects/3b29489d-e6c0-404b-b837-b767edeb2875/files/54467f34-c14c-4bd0-8518-b9c64d502f2a.jpg"
                  alt="Косметика"
                  className="w-full rounded-3xl shadow-2xl shadow-lime-200/30"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="catalog" className="py-24 px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4 bg-gradient-to-r from-lime-500 to-green-500 bg-clip-text text-transparent">
                Каталог товаров
              </h2>
              <p className="text-gray-600">Популярные продукты этого месяца</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {products.map((product, idx) => (
                <Card key={idx} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm animate-slide-up overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`aspect-square bg-gradient-to-br ${product.color} flex items-center justify-center text-7xl relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button size="sm" className="bg-white/90 text-green-700 hover:bg-white rounded-full"
                          <Icon name="Eye" size={14} />
                          Посмотреть
                        </Button>
                      </div>
                      💄
                    </div>
                    <div className="p-6 space-y-3">
                      <p className="text-xs text-lime-500 uppercase tracking-wider font-medium">{product.brand}</p>
                      <h3 className="font-medium text-gray-800">{product.name}</h3>
                      <div className="flex items-center justify-between">
                        <p className="text-xl font-light text-gray-800">{product.price}</p>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Icon name="Star" size={12} className="fill-yellow-300 text-yellow-300" />
                          {product.rating}
                        </div>
                      </div>
                      <Button 
                        className="w-full bg-gradient-to-r from-lime-400 to-green-400 hover:from-lime-500 hover:to-green-500 text-gray-900 border-0 shadow-md rounded-full"
                        size="sm"
                      >
                        <Icon name="ShoppingCart" size={14} />
                        В корзину
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="brands" className="py-24 px-8 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4 bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent">
                Премиум бренды
              </h2>
              <p className="text-gray-600">Ведущие мировые производители косметики</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-16">
              {brands.map((brand, idx) => (
                <button
                  key={idx}
                  className={`aspect-square ${brand.color} rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center text-sm font-medium text-gray-700`}
                >
                  {brand.name}
                </button>
              ))}
            </div>

            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/3b29489d-e6c0-404b-b837-b767edeb2875/files/acd05e6a-7d46-4380-a41d-8186eb556e8f.jpg"
                alt="Бренды"
                className="w-full rounded-3xl shadow-2xl shadow-lime-200/30"
              />
            </div>
          </div>
        </section>

        <section id="reviews" className="py-24 px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4 bg-gradient-to-r from-yellow-500 to-green-500 bg-clip-text text-transparent">
                Отзывы клиентов
              </h2>
              <p className="text-gray-600">Что говорят о нас</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((review, idx) => (
                <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm animate-fade-in">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className={`${review.avatar} text-white font-medium`}>
                          {review.author[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium text-gray-800">{review.author}</h4>
                        <div className="flex gap-1 mt-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Icon key={i} name="Star" size={12} className="fill-yellow-300 text-yellow-300" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {chatOpen && (
        <div className="fixed inset-0 bg-purple-900/20 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <Card className="w-full max-w-lg h-[600px] flex flex-col shadow-2xl border-0 rounded-3xl overflow-hidden animate-scale-in">
            <div className="p-6 bg-gradient-to-r from-pink-300 to-purple-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                    <Icon name="Sparkles" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">AI Консультант</h3>
                    <p className="text-xs text-white/80">Онлайн</p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setChatOpen(false)}
                  className="text-white hover:bg-white/20 rounded-full"
                >
                  <Icon name="X" size={18} />
                </Button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-br from-lime-50/50 to-green-50/50">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex gap-3 animate-fade-in ${msg.role === 'user' ? 'justify-end' : ''}`}
                >
                  {msg.role === 'ai' && (
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-gradient-to-br from-lime-400 to-green-400 text-gray-900 text-xs">AI</AvatarFallback>
                    </Avatar>
                  )}
                  <div 
                    className={`max-w-[75%] p-4 rounded-2xl text-sm shadow-md ${
                      msg.role === 'ai' 
                        ? 'bg-white text-gray-700' 
                        : 'bg-gradient-to-r from-lime-400 to-green-400 text-gray-900'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            <div className="p-6 bg-white border-t border-lime-200">
              <div className="flex gap-2">
                <Input 
                  placeholder="Ваш вопрос..." 
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  className="border-lime-200 focus:border-lime-300 rounded-full"
                />
                <Button 
                  onClick={sendMessage}
                  size="icon"
                  className="bg-gradient-to-r from-lime-400 to-green-400 hover:from-lime-500 hover:to-green-500 text-gray-900 rounded-full shadow-lg"
                >
                  <Icon name="Send" size={16} />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {cameraOpen && (
        <div className="fixed inset-0 bg-purple-900/20 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <Card className="w-full max-w-3xl shadow-2xl border-0 rounded-3xl overflow-hidden animate-scale-in">
            <div className="p-6 bg-gradient-to-r from-pink-300 to-purple-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon name="Camera" size={24} className="text-white" />
                  <h3 className="font-medium text-lg text-white">Виртуальная примерка</h3>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setCameraOpen(false)}
                  className="text-white hover:bg-white/20 rounded-full"
                >
                  <Icon name="X" size={18} />
                </Button>
              </div>
            </div>

            <CardContent className="p-8 bg-gradient-to-br from-pink-50 to-purple-50">
              <div className="aspect-video bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl flex flex-col items-center justify-center gap-6 relative overflow-hidden shadow-inner">
                <img 
                  src="https://cdn.poehali.dev/projects/3b29489d-e6c0-404b-b837-b767edeb2875/files/0784fd0a-45cc-4cdb-be28-bbada282c487.jpg"
                  alt="AI камера"
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="relative z-10 text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center animate-pulse shadow-xl">
                    <Icon name="Camera" size={36} className="text-white" />
                  </div>
                  <h4 className="text-2xl font-light text-gray-800">Наведите камеру на лицо</h4>
                  <p className="text-gray-600 max-w-md text-sm leading-relaxed">
                    AI автоматически распознает ваши черты и подберет подходящие оттенки косметики
                  </p>
                  <div className="flex gap-3 justify-center pt-4">
                    <Button className="bg-gradient-to-r from-pink-300 to-purple-300 hover:from-pink-400 hover:to-purple-400 text-white rounded-full shadow-lg">
                      <Icon name="Video" size={16} />
                      Включить камеру
                    </Button>
                    <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50 rounded-full">
                      <Icon name="Upload" size={16} />
                      Загрузить фото
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3 mt-6">
                {[
                  { name: 'Помады', color: 'from-pink-200 to-rose-200' },
                  { name: 'Тени', color: 'from-purple-200 to-indigo-200' },
                  { name: 'Румяна', color: 'from-rose-200 to-pink-200' },
                  { name: 'Тональные', color: 'from-amber-200 to-yellow-200' }
                ].map((item, idx) => (
                  <Button 
                    key={idx} 
                    className={`bg-gradient-to-r ${item.color} hover:opacity-80 text-gray-700 border-0 shadow-md rounded-full`}
                    size="sm"
                  >
                    {item.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <footer className="border-t border-pink-100 py-16 px-8 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 text-sm mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-2xl">🌸</div>
                <h3 className="font-medium bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Золотое Яблоко</h3>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">Премиум косметика с технологиями будущего</p>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-gray-800">Каталог</h4>
              <ul className="space-y-2 text-gray-600 text-xs">
                <li className="hover:text-pink-400 transition-colors cursor-pointer">Макияж</li>
                <li className="hover:text-pink-400 transition-colors cursor-pointer">Уход за кожей</li>
                <li className="hover:text-pink-400 transition-colors cursor-pointer">Парфюмерия</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-gray-800">Компания</h4>
              <ul className="space-y-2 text-gray-600 text-xs">
                <li className="hover:text-purple-400 transition-colors cursor-pointer">О нас</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Доставка</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-gray-800">Связь</h4>
              <ul className="space-y-2 text-gray-600 text-xs">
                <li>+7 495 123-45-67</li>
                <li>info@goldapple.ru</li>
                <li className="text-purple-400 mt-3">Пн-Вс: 9:00 - 21:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-pink-100 pt-8 text-center text-xs text-gray-500">
            © 2024 Золотое Яблоко. Создано с 💜
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;