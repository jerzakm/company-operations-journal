const fs = require('fs')
import { subiektConnection, sendQuery } from "./handlers/subiekt"


export const test = async () => {
    console.log('test spin')
    const pool = await subiektConnection()
    const groupData = await sendQuery(pool, productQueryString())
    const productList: ISubiektProduct[] = []

    for(const entry of groupData.recordset){
        productList.push({
            id: entry.tw_Id,
            group: entry.grt_Nazwa,
            symbol: entry.tw_Symbol,
            name: entry.tw_Nazwa,
            volume: entry.tw_Objetosc,
            weight: entry.tw_Masa
        })
    }
    console.log(`parsed ${productList.length} products from insert DB`)
}

const productQueryString = () => {
    return `
    SELECT tw_Id, tw_Symbol, tw_Nazwa, tw_Rodzaj, tw_Masa, tw_Objetosc, grt_Nazwa
	FROM STEMPLARIUSZ_SGT.dbo.tw__Towar,
		 STEMPLARIUSZ_SGT.dbo.sl_GrupaTw
    WHERE
	STEMPLARIUSZ_SGT.dbo.tw__Towar.tw_IdGrupa = STEMPLARIUSZ_SGT.dbo.sl_GrupaTw.grt_Id
    `
}

interface ISubiektProduct {
    id: number
    group: string
    symbol: string
    name: string
    volume: number
    weight: number
}