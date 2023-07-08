import { IdentifierSpec } from "./types";

const CAIP2: IdentifierSpec = {
  name: "chainId",
  regex: "[solana:a-zA-Z0-9]{5,41}",
  parameters: {
    delimiter: ":",
    values: {
      0: {
        name: "namespace",
        regex: "solana",
      },
      1: {
        name: "reference",
        regex: "[-a-zA-Z0-9]{1,32}",
      },
    },
  },
};

const CAIP10: IdentifierSpec = {
  name: "accountId",
  regex: `[solana:a-zA-Z0-9]{5,41}:[1-9A-HJ-NP-Za-km-z]{32,44}`,
  parameters: {
    delimiter: ":",
    values: {
      0: {
        name: "namespace",
        regex: "solana",
      },
      1: {
        name: "reference",
        regex: "[-a-zA-Z0-9]{1,32}",
      },
      2: {
        name: "address",
        regex: "[1-9A-HJ-NP-Za-km-z]{32,44}",
      },
    },
  },
};

// represents namespace:reference in CAIP-19
const AssetName: IdentifierSpec = {
  name: "assetName",
  regex: `(?:nft|token):[1-9A-HJ-NP-Za-km-z]{32,44}`,
  parameters: {
    delimiter: ":",
    values: {
      0: {
        name: "namespace",
        regex: "(?:nft|token)",
      },
      1: {
        name: "reference",
        regex: "[1-9A-HJ-NP-Za-km-z]{32,44}",
      },
    },
  },
};

const CAIP19AssetType: IdentifierSpec = {
  name: "assetType",
  regex: `[solana:a-zA-Z0-9]{5,41}\\/(?:nft|token):[1-9A-HJ-NP-Za-km-z]{32,44}`,
  parameters: {
    delimiter: "/",
    values: {
      0: CAIP2,
      1: AssetName,
    },
  },
};

const CAIP19AssetId: IdentifierSpec = {
  name: "assetId",
  regex: `[solana:a-zA-Z0-9]{5,41}\\/(?:nft|token):[1-9A-HJ-NP-Za-km-z]{32,44}`,
  parameters: {
    delimiter: "/",
    values: {
      0: CAIP2,
      1: AssetName,
    },
  },
};

export const CAIP = {
  "2": CAIP2,
  "10": CAIP10,
  "19": {
    assetName: AssetName,
    assetType: CAIP19AssetType,
    assetId: CAIP19AssetId,
  },
};
