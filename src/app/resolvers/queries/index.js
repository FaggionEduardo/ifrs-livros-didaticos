/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2020 Fábrica de Sotware IFRS. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const {Category} = require("../../models")

let queries = {
  categories: ()=> Category.findAll(),
  category: (_, {id}) => Category.findByPk(id),
}

const modules = []

modules.forEach((module) => {
  queries = { ...queries, ...module }
})

module.exports = { ...queries }
