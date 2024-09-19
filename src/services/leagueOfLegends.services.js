import puppeteer from "puppeteer";

export const getDataFromWebPage = async (juego, perfil) => {
    try {
        const browser = await puppeteer.launch({
            headless: false,
        });
        const page = await browser.newPage();
        // Espera hasta que la página esté completamente cargada
        await page.goto(`${juego}${perfil}`, {
            waitUntil: 'load', // Asegura que la página se cargue completamente
            timeout: 1200000
        });

        // Desplaza hacia abajo para asegurar la carga de contenido dinámico
        await page.evaluate(() => {
            window.scrollBy(0, window.innerHeight);
        });

        const data = await page.evaluate(() => {
            const rangoElement = document.querySelector('.tier');
            const lpElement = document.querySelector('.lp');
            const winLoseElement = document.querySelector('.win-lose');
            const winRateElement = document.querySelector('.ratio');

            const rangoInvocador = rangoElement ? rangoElement.innerText : 'Rango no encontrado';
            const lp = lpElement ? lpElement.innerText : 'LP no encontrado';
            const winLose = winLoseElement ? winLoseElement.innerText : 'Datos de victorias/derrotas no encontrados';
            const winRate = winRateElement ? winRateElement.innerText : 'WinRate no encontrado';

            return {rangoInvocador, lp, winLose, winRate };
        });

        await browser.close();
        return data;
    } catch (error) {
        console.error('Error al hacer scraping: ' + error);
    }
}