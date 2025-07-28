import { Card } from "@/components/Card"
import { Collapsible } from "@/components/Collapsible"
import { Header } from "@/components/Header"
import { Link } from "@/components/Link"
import { Tags } from "@/components/Tags"

export const Experience = () => {
    return <section>
        <Header id="experience">опыт</Header>

        <div class="space-y-4">

            <Card>
                <div class="flex justify-between">
                    <h1 class="text-text-solid font-bold">МойОфис</h1>

                    <time>июнь 2022</time>
                </div>
                <div>практика от колледжа</div>

                <div class="h-[1px] bg-border w-full mt-4 mb-6" />

                <div class="text-justify">
                    На практике сравнивал, как часто пользуются разными функциями в Microsoft Office и МойОфис, по логам. Часть задач автоматизировал на Python, потом писал SQL-запросы к ClickHouse, чтобы анализировать данные.
                </div>

                <div class="flex mt-4 gap-2 flex-wrap">
                    <Tags tags={["python", "sql"]} />
                </div>
            </Card>

            <Card>
                <div class="flex justify-between">
                    <h1 class="text-text-solid font-bold">Yandex Игры</h1>

                    <time>2023-2025</time>
                </div>
                <div>так по приколу</div>

                <div class="h-[1px] bg-border w-full mt-4 mb-6" />

                <div class="text-justify">
                    Делал игры для Яндекс.Игр — разработал около десяти штук. Получилось немного заработать на монетизации.
                </div>

                <Collapsible title="примеры" className="mt-4 mb-6 -mx-2">
                    <Link to="https://yandex.ru/games/app/281797">Падение Нубика</Link>
                    <Link to="https://yandex.ru/games/app/432647">Безумная Кирка</Link>
                    <Link to="https://yandex.ru/games/app/442334">Резня Плейграунд</Link>
                </Collapsible>

                <div class="flex gap-2 flex-wrap">
                    <Tags tags={["cocos2d", "unity"]} />
                </div>
            </Card>

        </div>

    </section>
}