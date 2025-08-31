import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"
import DiagnosticTable from "@/components/DiagnosticTable"

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-turquoise-50">
      {/* Diagnostic Table Demo */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <DiagnosticTable />
      </section>

      <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-turquoise-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-montserrat font-bold text-2xl bg-gradient-to-r from-coral to-purple bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-coral transition-colors">Главная</a>
              <a href="#about" className="text-gray-700 hover:text-coral transition-colors">Обо мне</a>
              <a href="#portfolio" className="text-gray-700 hover:text-coral transition-colors">Портфолио</a>
              <a href="#blog" className="text-gray-700 hover:text-coral transition-colors">Блог</a>
              <a href="#services" className="text-gray-700 hover:text-coral transition-colors">Услуги</a>
              <a href="#contact" className="text-gray-700 hover:text-coral transition-colors">Контакты</a>
            </div>
            <Button className="md:hidden" variant="outline" size="sm">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <h1 className="font-montserrat text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-coral via-purple to-turquoise bg-clip-text text-transparent">
                Креативный
              </span>
              <br />
              <span className="text-gray-800">Разработчик</span>
            </h1>
            <p className="font-open-sans text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Создаю современные цифровые решения с яркой визуализацией и безупречной функциональностью
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-coral to-coral-light hover:from-coral-dark hover:to-coral text-white font-semibold px-8 py-6 text-lg animate-pulse-glow">
                Посмотреть работы
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button variant="outline" className="border-2 border-purple text-purple hover:bg-purple hover:text-white px-8 py-6 text-lg">
                Связаться со мной
                <Icon name="Mail" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-gray-800 mb-4">Обо мне</h2>
            <p className="font-open-sans text-xl text-gray-600 max-w-2xl mx-auto">
              Увлеченный разработчик с опытом создания инновационных веб-решений
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h3 className="font-montserrat text-2xl font-semibold text-gray-800 mb-4">Мои навыки</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <Badge className="bg-coral text-white px-4 py-2 text-sm">React</Badge>
                <Badge className="bg-turquoise text-white px-4 py-2 text-sm">TypeScript</Badge>
                <Badge className="bg-purple text-white px-4 py-2 text-sm">Node.js</Badge>
                <Badge className="bg-yellow text-white px-4 py-2 text-sm">UI/UX Design</Badge>
                <Badge className="bg-coral-light text-white px-4 py-2 text-sm">Next.js</Badge>
                <Badge className="bg-turquoise-light text-white px-4 py-2 text-sm">MongoDB</Badge>
              </div>
              <p className="font-open-sans text-gray-600 leading-relaxed">
                Специализируюсь на создании современных веб-приложений с акцентом на пользовательский опыт 
                и производительность. Постоянно изучаю новые технологии и следую актуальным трендам в разработке.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-coral to-turquoise rounded-2xl p-8 text-white">
                <div className="flex items-center mb-4">
                  <Icon name="Code" size={32} className="mr-4" />
                  <h4 className="font-montserrat text-xl font-semibold">5+ лет опыта</h4>
                </div>
                <p className="font-open-sans mb-4">в разработке веб-приложений</p>
                
                <div className="flex items-center mb-4">
                  <Icon name="Rocket" size={32} className="mr-4" />
                  <h4 className="font-montserrat text-xl font-semibold">50+ проектов</h4>
                </div>
                <p className="font-open-sans mb-4">успешно запущенных в продакшн</p>
                
                <div className="flex items-center">
                  <Icon name="Users" size={32} className="mr-4" />
                  <h4 className="font-montserrat text-xl font-semibold">100% клиентов</h4>
                </div>
                <p className="font-open-sans">остаются довольными результатом</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-gray-800 mb-4">Портфолио</h2>
            <p className="font-open-sans text-xl text-gray-600">Мои лучшие работы и проекты</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <Card key={project} className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="h-48 bg-gradient-to-br from-coral via-purple to-turquoise rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="Image" size={48} className="text-white" />
                  </div>
                  <CardTitle className="font-montserrat text-xl">Проект {project}</CardTitle>
                  <CardDescription className="font-open-sans">
                    Современное веб-приложение с интуитивным интерфейсом
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-coral/10 text-coral">React</Badge>
                    <Badge variant="secondary" className="bg-turquoise/10 text-turquoise">TypeScript</Badge>
                    <Badge variant="secondary" className="bg-purple/10 text-purple">API</Badge>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-coral to-purple text-white hover:shadow-lg">
                    Посмотреть проект
                    <Icon name="ExternalLink" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-gray-800 mb-4">Блог</h2>
            <p className="font-open-sans text-xl text-gray-600">Делюсь опытом и знаниями в разработке</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Современные тренды в React", date: "15 августа 2024", category: "Frontend" },
              { title: "Оптимизация производительности", date: "10 августа 2024", category: "Performance" },
              { title: "UI/UX для разработчиков", date: "5 августа 2024", category: "Design" }
            ].map((post, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0">
                <CardHeader>
                  <div className="h-32 bg-gradient-to-r from-coral via-purple to-turquoise rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="BookOpen" size={32} className="text-white" />
                  </div>
                  <Badge className="w-fit mb-2 bg-turquoise/10 text-turquoise">{post.category}</Badge>
                  <CardTitle className="font-montserrat text-lg group-hover:text-coral transition-colors">{post.title}</CardTitle>
                  <CardDescription className="font-open-sans text-sm text-gray-500">{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-open-sans text-gray-600 mb-4">
                    Краткое описание статьи о современных подходах в веб-разработке...
                  </p>
                  <Button variant="ghost" className="text-coral hover:text-coral-dark hover:bg-coral/10 p-0">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-gray-800 mb-4">Услуги</h2>
            <p className="font-open-sans text-xl text-gray-600">Что я могу для вас сделать</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "Code", title: "Веб-разработка", description: "Создание современных веб-приложений на React и TypeScript", color: "coral" },
              { icon: "Palette", title: "UI/UX Дизайн", description: "Проектирование интуитивных пользовательских интерфейсов", color: "turquoise" },
              { icon: "Smartphone", title: "Мобильная адаптация", description: "Адаптивный дизайн для всех устройств и экранов", color: "purple" },
              { icon: "Zap", title: "Оптимизация", description: "Повышение скорости загрузки и производительности", color: "yellow" },
              { icon: "Shield", title: "Безопасность", description: "Внедрение современных практик безопасности", color: "coral" },
              { icon: "Headphones", title: "Техподдержка", description: "Консультации и поддержка после запуска проекта", color: "turquoise" }
            ].map((service, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0">
                <CardHeader>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-${service.color} to-${service.color}-light flex items-center justify-center`}>
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="font-montserrat text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-open-sans text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-coral via-purple to-turquoise">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-white mb-4">Готовы начать проект?</h2>
          <p className="font-open-sans text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Свяжитесь со мной, чтобы обсудить ваши идеи и воплотить их в жизнь
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-coral hover:bg-gray-100 font-semibold px-8 py-6 text-lg">
              <Icon name="Mail" size={20} className="mr-2" />
              Написать письмо
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-coral px-8 py-6 text-lg">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </Button>
          </div>
          
          <div className="mt-12 flex justify-center space-x-6">
            {["Github", "Linkedin", "Twitter", "Instagram"].map((social) => (
              <Button key={social} variant="ghost" className="text-white hover:text-white hover:bg-white/20 p-3">
                <Icon name={social as any} size={24} />
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-open-sans text-gray-400">
            © 2024 Portfolio. Создано с ❤️ для демонстрации навыков
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Index