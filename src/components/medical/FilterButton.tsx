import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';

interface FilterGroup {
  name: string;
  options: string[];
}

interface Props {
  groups: FilterGroup[];
}

const FilterButton = ({ groups }: Props) => {
  const [open, setOpen] = useState<string | null>(groups[0]?.name ?? null);
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const count = Object.values(selected).filter(Boolean).length;

  const toggle = (key: string) =>
    setSelected((p) => ({ ...p, [key]: !p[key] }));

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="h-12 rounded-2xl border-2 font-semibold gap-2 hover:border-[#00c9a6] hover:text-[#00c9a6]"
        >
          <Icon name="SlidersHorizontal" size={18} /> Фильтры
          {count > 0 && (
            <span className="ml-1 w-6 h-6 rounded-full bg-[#00c9a6] text-white text-xs flex items-center justify-center">
              {count}
            </span>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg rounded-3xl">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">Фильтры</DialogTitle>
        </DialogHeader>
        <div className="space-y-2 max-h-[60vh] overflow-y-auto -mx-2 px-2">
          {groups.map((g) => (
            <div key={g.name} className="border border-border rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === g.name ? null : g.name)}
                className="w-full flex items-center justify-between px-4 py-3 font-semibold hover:bg-muted/50 transition-colors"
              >
                {g.name}
                <Icon
                  name="ChevronDown"
                  size={18}
                  className={`transition-transform ${open === g.name ? 'rotate-180' : ''}`}
                />
              </button>
              {open === g.name && (
                <div className="px-4 pb-3 space-y-2 animate-fade-in">
                  {g.options.map((opt) => {
                    const key = `${g.name}:${opt}`;
                    return (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer py-1">
                        <Checkbox
                          checked={!!selected[key]}
                          onCheckedChange={() => toggle(key)}
                          className="data-[state=checked]:bg-[#00c9a6] data-[state=checked]:border-[#00c9a6]"
                        />
                        <span className="text-sm">{opt}</span>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
        <DialogFooter className="flex-row gap-3 sm:justify-between">
          <Button
            variant="ghost"
            onClick={() => setSelected({})}
            className="rounded-2xl text-muted-foreground"
          >
            Сбросить
          </Button>
          <Button className="rounded-2xl bg-[#00c9a6] hover:bg-[#00a88c] text-white font-semibold flex-1 sm:flex-none px-8">
            Показать результаты
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FilterButton;
