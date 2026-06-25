import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Props {
  placeholder?: string;
}

const SearchBar = ({ placeholder = 'Врач, специальность, услуга или клиника...' }: Props) => {
  const [search, setSearch] = useState('');
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <div className="relative flex-1">
        <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={placeholder}
          className="h-14 pl-12 pr-4 rounded-2xl border-2 bg-white text-base shadow-sm focus-visible:ring-[#00c9a6]"
        />
      </div>
      <Button className="h-14 px-8 rounded-2xl bg-[#ffad00] hover:bg-[#ff9100] text-white font-bold text-base shadow-lg">
        Найти
      </Button>
    </div>
  );
};

export default SearchBar;
