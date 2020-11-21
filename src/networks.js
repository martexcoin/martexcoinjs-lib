// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731

module.exports = {
  martexcoin: {
    messagePrefix: 'MarteX Signed Message:\n',
    bip32: {
      public: 0x0488b21e,  // start with "xpub..."
      private: 0x0488ade4  // start with "xprv..."
    },
    pubKeyHash: 0x32,
    scriptHash: 0x05,
    wif: 0xb2,
    dustThreshold: 0
  }
}
