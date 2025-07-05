import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedStroke, setSelectedStroke] = useState("freestyle");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [analysisResult, setAnalysisResult] = useState(null);

  const swimmingStrokes = [
    { id: "freestyle", name: "Кроль", icon: "Waves", color: "bg-blue-500" },
    {
      id: "breaststroke",
      name: "Брасс",
      icon: "Activity",
      color: "bg-green-500",
    },
    {
      id: "butterfly",
      name: "Баттерфляй",
      icon: "Zap",
      color: "bg-purple-500",
    },
    {
      id: "backstroke",
      name: "Кроль на спине",
      icon: "RotateCcw",
      color: "bg-orange-500",
    },
  ];

  const features = [
    {
      title: "Анализ техники",
      description: "AI-алгоритм анализирует технику плавания",
      icon: "BarChart3",
    },
    {
      title: "Видео-обратная связь",
      description: "Мгновенная обратная связь по видео",
      icon: "Video",
    },
    {
      title: "Сообщество",
      description: "Делитесь опытом с другими пловцами",
      icon: "Users",
    },
    {
      title: "Персональные тренировки",
      description: "Индивидуальные планы тренировок",
      icon: "Target",
    },
  ];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Simulate upload progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += 20;
        setUploadProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setAnalysisResult({
              technique_score: 85,
              recommendations: [
                "Увеличьте амплитуду гребка",
                "Работайте над синхронизацией дыхания",
              ],
              stroke_rate: 16,
              efficiency: 78,
            });
          }, 1000);
        }
      }, 200);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon
                  name="Waves"
                  className="h-6 w-6 text-primary-foreground"
                />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">
                Swimming Academy
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Тренировки
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Анализ
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Сообщество
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Справка
              </a>
            </nav>
            <Button>Войти</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Улучшите свою технику плавания
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Профессиональный анализ техники плавания с помощью искусственного
              интеллекта. Загружайте видео, получайте персональные рекомендации
              и совершенствуйте свои навыки.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <Card
                    key={index}
                    className="p-4 hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-0">
                      <div className="flex items-center space-x-3">
                        <Icon
                          name={feature.icon}
                          className="h-8 w-8 text-primary"
                        />
                        <div>
                          <h3 className="font-semibold text-sm">
                            {feature.title}
                          </h3>
                          <p className="text-xs text-gray-600">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button size="lg" className="w-full">
                <Icon name="Upload" className="mr-2 h-5 w-5" />
                Загрузить видео для анализа
              </Button>
            </div>
            <div className="relative">
              <img
                src="/img/c643030f-9987-4918-ad59-e75840057caf.jpg"
                alt="Swimming Pool"
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Swimming Strokes Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Стили плавания
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {swimmingStrokes.map((stroke) => (
              <Card
                key={stroke.id}
                className="hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 ${stroke.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon name={stroke.icon} className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{stroke.name}</CardTitle>
                  <CardDescription>
                    Анализ и улучшение техники {stroke.name.toLowerCase()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <Icon name="Play" className="mr-2 h-4 w-4" />
                    Начать тренировку
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Analysis Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Анализ техники
          </h2>

          <Tabs defaultValue="upload" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="upload">Загрузка видео</TabsTrigger>
              <TabsTrigger value="analysis">Анализ</TabsTrigger>
              <TabsTrigger value="recommendations">Рекомендации</TabsTrigger>
            </TabsList>

            <TabsContent value="upload" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Загрузите видео для анализа</CardTitle>
                  <CardDescription>
                    Поддерживаемые форматы: MP4, MOV, AVI. Максимальный размер:
                    100MB
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Icon
                      name="Upload"
                      className="mx-auto h-12 w-12 text-gray-400 mb-4"
                    />
                    <p className="text-sm text-gray-600 mb-4">
                      Перетащите файл сюда или нажмите для выбора
                    </p>
                    <Input
                      type="file"
                      accept="video/*"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="video-upload"
                    />
                    <label htmlFor="video-upload">
                      <Button asChild>
                        <span>Выбрать файл</span>
                      </Button>
                    </label>
                  </div>

                  {uploadProgress > 0 && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Загрузка...</span>
                        <span>{uploadProgress}%</span>
                      </div>
                      <Progress value={uploadProgress} className="w-full" />
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analysis" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Результаты анализа</CardTitle>
                </CardHeader>
                <CardContent>
                  {analysisResult ? (
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-semibold mb-2">
                              Оценка техники
                            </h3>
                            <div className="flex items-center space-x-3">
                              <Progress
                                value={analysisResult.technique_score}
                                className="flex-1"
                              />
                              <Badge variant="outline">
                                {analysisResult.technique_score}/100
                              </Badge>
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">
                              Частота гребков
                            </h3>
                            <p className="text-2xl font-bold text-primary">
                              {analysisResult.stroke_rate} гребков/мин
                            </p>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-semibold mb-2">
                              Эффективность
                            </h3>
                            <div className="flex items-center space-x-3">
                              <Progress
                                value={analysisResult.efficiency}
                                className="flex-1"
                              />
                              <Badge variant="outline">
                                {analysisResult.efficiency}%
                              </Badge>
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">
                              Статус анализа
                            </h3>
                            <Badge className="bg-green-100 text-green-800">
                              <Icon
                                name="CheckCircle"
                                className="mr-1 h-3 w-3"
                              />
                              Завершено
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <img
                          src="/img/bbad5e0f-a150-4208-8eae-3da0e3990d93.jpg"
                          alt="Swimming Analysis"
                          className="rounded-lg w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Icon
                        name="BarChart3"
                        className="mx-auto h-12 w-12 text-gray-400 mb-4"
                      />
                      <p className="text-gray-500">
                        Загрузите видео для начала анализа
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="recommendations" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Персональные рекомендации</CardTitle>
                </CardHeader>
                <CardContent>
                  {analysisResult ? (
                    <div className="space-y-4">
                      <h3 className="font-semibold">
                        Рекомендации для улучшения:
                      </h3>
                      <ul className="space-y-2">
                        {analysisResult.recommendations.map((rec, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <Icon
                              name="ArrowRight"
                              className="h-5 w-5 text-primary mt-0.5"
                            />
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6">
                        <h3 className="font-semibold mb-3">
                          Упражнения для отработки:
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <Card className="p-4">
                            <h4 className="font-medium mb-2">Упражнение 1</h4>
                            <p className="text-sm text-gray-600">
                              Плавание на одной руке для улучшения амплитуды
                              гребка
                            </p>
                          </Card>
                          <Card className="p-4">
                            <h4 className="font-medium mb-2">Упражнение 2</h4>
                            <p className="text-sm text-gray-600">
                              Работа с дыханием через каждые 3 гребка
                            </p>
                          </Card>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Icon
                        name="Target"
                        className="mx-auto h-12 w-12 text-gray-400 mb-4"
                      />
                      <p className="text-gray-500">
                        Рекомендации появятся после анализа видео
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Сообщество пловцов
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Алексей К.",
                level: "Продвинутый",
                comment:
                  "Отличный анализ техники! Улучшил время на 200м кролем на 15 секунд.",
              },
              {
                name: "Мария С.",
                level: "Начинающий",
                comment:
                  "Благодаря рекомендациям исправила основные ошибки в технике брасса.",
              },
              {
                name: "Дмитрий Р.",
                level: "Профессионал",
                comment:
                  "Использую для подготовки к соревнованиям. Очень детальный анализ.",
              },
            ].map((review, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <Icon
                        name="User"
                        className="h-5 w-5 text-primary-foreground"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{review.name}</h3>
                      <Badge variant="outline" className="text-xs">
                        {review.level}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              <Icon name="Users" className="mr-2 h-5 w-5" />
              Присоединиться к сообществу
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon
                    name="Waves"
                    className="h-5 w-5 text-primary-foreground"
                  />
                </div>
                <h3 className="font-bold">Swimming Academy</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Профессиональный анализ техники плавания с помощью ИИ
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Продукт</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Функции
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Тарифы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Справка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Документация
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Блог
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Карьера
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Swimming Academy. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
