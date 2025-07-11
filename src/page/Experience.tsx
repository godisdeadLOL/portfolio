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
                    офисный пакет офисный пакет офисный пакет
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
                    делал яндекс игры лол с десяток сделал а денег нет вот грустно
                </div>

                <Collapsible title="примеры" className="mt-4 mb-6 -mx-2">
                    <Link to="lol">Падение Нубика</Link>
                    <Link to="lol">Безумная Кирка</Link>
                    <Link to="lol">Резня Плейграунд</Link>
                </Collapsible>

                <div class="flex gap-2 flex-wrap">
                    <Tags tags={["cocos2d", "unity"]} />
                </div>
            </Card>

        </div>

    </section>
}