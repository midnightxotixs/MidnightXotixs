// 1. Front Bakery Management
import bakeryCategory from './bakeryCategory.js'
import bakeryProduct  from './bakeryProduct.js'
import bakerySettings from './bakerySettings.js'
import customer       from './customer.js'

// 2. VIP Vault Management
import vaultSettings  from './vaultSettings.js'
import hiddenProduct  from './hiddenProduct.js'
import category       from './category.js'
import passcode       from './passcode.js'

export const schemaTypes = [
  // Front Bakery
  bakeryCategory,
  bakeryProduct,
  bakerySettings,
  customer,

  // VIP Vault
  vaultSettings,
  hiddenProduct,
  category,
  passcode,
]
