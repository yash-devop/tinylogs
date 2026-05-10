type IndicatorProps = {
  section: number;
  total: number;
};
export const CurrentPageIndicator = ({
  section = 1,
  total = 1,
}: IndicatorProps) => {
  return (
    <div>
      [ <span className="text-primary font-semibold">{section}</span> / {total}]
    </div>
  );
};
