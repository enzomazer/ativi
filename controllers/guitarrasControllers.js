import { randomUUID } from "node:crypto"

let guitarras = [
    {
        id: randomUUID(),
        marca: "Fender",
        modelo: "Stratocaster",
        cor: "Sunburst",
        ponte: "Tremolo"
    },
    {
        id: randomUUID(),
        marca: "Gibson",
        modelo: "Les Paul",
        cor: "Cherry Sunburst",
        ponte: "Tune-o-Matic"
    },
    {
        id: randomUUID(),
        marca: "Ibanez",
        modelo: "RG550",
        cor: "Purple Neon",
        ponte: "Floyd Rose"
    },
    {
        id: randomUUID(),
        marca: "PRS",
        modelo: "Custom 24",
        cor: "Blue Matteo",
        ponte: "Fixed"
    },
    {
        id: randomUUID(),
        marca: "Jackson",
        modelo: "Rhoads",
        cor: "Black with Yellow Bevels",
        ponte: "Floyd Rose"
    }
];

const listarGuitarras = (req, res) => {
    const {id} = req.body
    if(!id) {
        res.json(guitarras)
    }
    else {
        let achou = false
        for (let ida of guitarras) {
            if (ida.id === id) {
                achou = ida
            }
        }
        if (achou != false) {
            res.json(achou)
        }
        else {
            return res.json({
                erro: true,
                mensagem: "ID não encontrado"
        })
        }
    }
}


const adicionaGuitarra = (req, res) => {
    const {marca, modelo, cor, ponte} = req.body
    if(!marca || !modelo || !cor || !ponte) {
        return res.json({
                erro: true,
                mensagem: "Campos não preenchidos"
        })
    }
    const guitas = {
        id: randomUUID(),
        marca,
        modelo,
        cor,
        ponte,
    }

    try {
        guitarras.push(guitas)
        return res.json({
            erro: false,
            mensagem: "Guitarra adicionada"
    })}
    catch (error) {
        return res.json({
            erro: true,
            mensagem: error
    })}
}

const atualizarGuitarras = (req, res) => {
    const {id, marca, modelo, cor, ponte} = req.body
    if(!id) {
        return res.json({
            erro: true,
            mensagem: "ID não especificado"
    })
    }
    else {
        let achou = false
        for (let ida of guitarras) {
            if (ida.id === id) {
                if (marca != false) {
                    ida.marca = marca
                }
                if (modelo != false) {
                    ida.modelo = modelo
                }
                if (cor != false) {
                    ida.cor = cor
                }
                if (ponte != false) {
                    ida.ponte = ponte
                }
                achou = ida
            }
        }
        if (achou != false) {
            return res.json({
                erro: false,
                novaGuitarra: achou
        })
        }
        else {
            return res.json({
                erro: true,
                mensagem: "ID não encontrado"
        })
        }
    }
}

const excluirGuitarras = (req, res) => {
    const {id} = req.body
    const index = guitarras.findIndex((a) => a.id == id)
    if (index == -1) {
        return res.json({
            erro: true,
            mensagem: "ID não encontrado"
    })}
    guitarras.splice(index, 1)
    return res.json({
        erro: false,
        mensagem: "Guitarra deletada"
})
}

export {listarGuitarras, adicionaGuitarra, atualizarGuitarras, excluirGuitarras}