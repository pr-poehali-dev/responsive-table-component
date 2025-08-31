import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface DiagnosticItem {
  category: string
  items: {
    name: string
    issue?: string
    status: 'good' | 'missing' | 'normal'
    defect?: string
    microLeak?: string
    leak?: string
  }[]
}

const diagnosticData: DiagnosticItem[] = [
  {
    category: "Диагностика",
    items: [
      { name: "Двигатель", status: "good", defect: "Дефект" },
      { name: "Коробка передач", status: "good", defect: "Дефект" },
      { name: "Холостой ход", status: "good", defect: "Дефект" }
    ]
  },
  {
    category: "Двигатель", 
    items: [
      { 
        name: "Утечка масла", 
        issue: "Клапанная крышка", 
        status: "missing", 
        microLeak: "Микроутечка", 
        leak: "Утечка" 
      },
      { 
        name: "", 
        issue: "Прокладка головки блока цилиндров", 
        status: "missing", 
        microLeak: "Микроутечка", 
        leak: "Утечка" 
      },
      { 
        name: "", 
        issue: "Блок цилиндров/масляный поддон", 
        status: "missing", 
        microLeak: "Микроутечка", 
        leak: "Утечка" 
      },
      { name: "Давление масла", status: "normal", defect: "Недостаток" },
      { 
        name: "Утечка охлаждающей жидкости", 
        issue: "Прокладка головки блока цилиндров", 
        status: "missing", 
        microLeak: "Микроутечка", 
        leak: "Утечка" 
      },
      { 
        name: "", 
        issue: "Помпа", 
        status: "missing", 
        microLeak: "Микроутечка", 
        leak: "Утечка" 
      },
      { 
        name: "", 
        issue: "Радиатор", 
        status: "missing", 
        microLeak: "Микроутечка", 
        leak: "Утечка" 
      },
      { name: "Количество охлаждающей жидкости", status: "normal", defect: "Недостаток" },
      { name: "Топливная система", status: "good", defect: "Дефект" }
    ]
  }
]

const DiagnosticTable = () => {
  const getStatusBadge = (status: 'good' | 'missing' | 'normal') => {
    switch (status) {
      case 'good':
        return <Badge className="bg-green-600 text-white hover:bg-green-700">Хорошо</Badge>
      case 'missing':
        return <Badge className="bg-green-600 text-white hover:bg-green-700">Отсутствует</Badge>
      case 'normal':
        return <Badge className="bg-green-600 text-white hover:bg-green-700">Норма</Badge>
      default:
        return null
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-montserrat text-gray-800">Диагностический отчет</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {/* Desktop и планшет - обычная таблица */}
          <div className="hidden md:block">
            <div className="overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="text-left p-4 font-montserrat font-semibold text-gray-700 w-48">
                      Категория
                    </th>
                    <th className="text-left p-4 font-montserrat font-semibold text-gray-700 flex-1">
                      Компонент
                    </th>
                    <th className="text-center p-4 font-montserrat font-semibold text-gray-700 w-32">
                      Оценка
                    </th>
                    <th className="text-center p-4 font-montserrat font-semibold text-gray-700 w-32">
                      Статус
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {diagnosticData.map((category, categoryIndex) => (
                    category.items.map((item, itemIndex) => (
                      <tr key={`${categoryIndex}-${itemIndex}`} className="border-b hover:bg-gray-50 transition-colors">
                        <td className="p-4 bg-gray-100 border-r">
                          {itemIndex === 0 && (
                            <div className="font-montserrat font-semibold text-gray-800">
                              {category.category}
                            </div>
                          )}
                        </td>
                        <td className="p-4">
                          <div className="font-open-sans text-gray-800">
                            {item.name}
                            {item.issue && (
                              <div className="text-gray-600 mt-1">{item.issue}</div>
                            )}
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          {getStatusBadge(item.status)}
                        </td>
                        <td className="p-4 text-center">
                          <div className="space-y-1">
                            {item.defect && (
                              <div className="text-sm font-open-sans text-gray-500">{item.defect}</div>
                            )}
                            {item.microLeak && (
                              <div className="text-sm font-open-sans text-gray-500">{item.microLeak}</div>
                            )}
                            {item.leak && (
                              <div className="text-sm font-open-sans text-gray-500">{item.leak}</div>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Мобильная версия - горизонтальный скролл только для таблицы */}
          <div className="md:hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="text-left p-3 font-montserrat font-semibold text-gray-700 min-w-[120px]">
                      Категория
                    </th>
                    <th className="text-left p-3 font-montserrat font-semibold text-gray-700 min-w-[300px]">
                      Компонент
                    </th>
                    <th className="text-center p-3 font-montserrat font-semibold text-gray-700 min-w-[100px]">
                      Оценка
                    </th>
                    <th className="text-center p-3 font-montserrat font-semibold text-gray-700 min-w-[120px]">
                      Статус
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {diagnosticData.map((category, categoryIndex) => (
                    category.items.map((item, itemIndex) => (
                      <tr key={`${categoryIndex}-${itemIndex}`} className="border-b">
                        <td className="p-3 bg-gray-100 border-r min-w-[120px]">
                          {itemIndex === 0 && (
                            <div className="font-montserrat font-semibold text-gray-800 text-sm">
                              {category.category}
                            </div>
                          )}
                        </td>
                        <td className="p-3 min-w-[300px]">
                          <div className="font-open-sans text-gray-800 text-sm">
                            {item.name}
                            {item.issue && (
                              <div className="text-gray-600 mt-1 text-xs">{item.issue}</div>
                            )}
                          </div>
                        </td>
                        <td className="p-3 text-center min-w-[100px]">
                          {getStatusBadge(item.status)}
                        </td>
                        <td className="p-3 text-center min-w-[120px]">
                          <div className="space-y-1">
                            {item.defect && (
                              <div className="text-xs font-open-sans text-gray-500">{item.defect}</div>
                            )}
                            {item.microLeak && (
                              <div className="text-xs font-open-sans text-gray-500">{item.microLeak}</div>
                            )}
                            {item.leak && (
                              <div className="text-xs font-open-sans text-gray-500">{item.leak}</div>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))
                  ))}
                </tbody>
              </table>
            </div>
            {/* Подсказка о скролле для мобильных */}
            <div className="p-3 text-center bg-gray-50 border-t">
              <p className="text-xs font-open-sans text-gray-500">
                👆 Смахните влево/вправо для просмотра всех колонок
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default DiagnosticTable