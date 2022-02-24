'use strict';

const ValidationContract = require('../validators/fluent-validator')
const repository = require('../repositories/customer-repository');

exports.post = async (req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.name, 3, 'O nome deve ter no mínimo 3 caracteres');
    contract.isEmail(req.body.email, 'Email inválido');
    contract.hasMinLen(req.body.password, 8, 'A senha deve ter no mínimo 8 caracteres');

    //se for inválido: 
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        await repository.create(req.body)
        res.status(201).send({
            message: 'Cliente cadastrado com sucesso'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar requisição'
        });
    }
};
