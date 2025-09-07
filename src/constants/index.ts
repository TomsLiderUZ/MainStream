import { useTranslations } from "next-intl";

export interface StatisticType {
    number: string;
    title: string;
}

export const Statistic: StatisticType[] = [
    {
        number: "4+",
        title : "ГОДА НА РЫНКЕ"
    }
]