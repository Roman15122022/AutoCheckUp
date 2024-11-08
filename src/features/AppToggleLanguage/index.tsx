import { Language } from 'src/types'
import { useAppToggleLanguage } from './useAppToggleLanguage'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'src/components/shadcn/select'

const AppToggleLanguage = (): JSX.Element => {
  const { language, handleChangeLocale } = useAppToggleLanguage()

  return (
    <div className="flex flex-col mt-6">
      <div className="flex items-center space-x-3">
        <span className="text-lg font-medium">Language:</span>
        <Select
          value={language}
          onValueChange={value => handleChangeLocale(value as Language)}
        >
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={Language.EN}>English</SelectItem>
            <SelectItem value={Language.UA}>Українська</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export default AppToggleLanguage
