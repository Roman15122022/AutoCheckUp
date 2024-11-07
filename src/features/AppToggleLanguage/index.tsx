import { Language } from 'src/types'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'src/components/shadcn/select'
import { useAppToggleLanguage } from 'src/features/AppToggleLanguage/useAppToggleLanguage'

const AppToggleLanguage = (): JSX.Element => {
  const { language, changeLanguage } = useAppToggleLanguage()

  return (
    <div className="flex items-center space-x-3">
      <span className="text-lg font-medium mr-3">Language:</span>
      <Select
        value={language}
        onValueChange={value => changeLanguage(value as Language)}
      >
        <SelectTrigger className="w-32 border-2 border-gray-300 rounded-md p-2 hover:border-blue-500 focus:border-blue-500">
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent className="bg-white rounded-md shadow-md">
          <SelectItem
            value={Language.EN}
            className="py-2 px-4 text-gray-800 hover:bg-blue-100 flex items-center space-x-2"
          >
            <span>English</span>
          </SelectItem>
          <SelectItem
            value={Language.UA}
            className="py-2 px-4 text-gray-800 hover:bg-blue-100 flex items-center space-x-2"
          >
            <span>Українська</span>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default AppToggleLanguage
