# caip-solana

CAIP standard utils

## ChainId (CAIP-2)

### Object-oriented

```typescript
import { ChainId } from "caip-solana";

const chainId = new ChainId("solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp"); //mainnet

// OR

const chainId = new ChainId({ namespace: "solana", reference: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp" });

// THEN

chainId.toString();
// "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp"

chainId.toJSON();
// { namespace: "solana", reference: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp" }
```

### Functional

```typescript
import { ChainId } from "caip-solana";

ChainId.parse("solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp");
// { namespace: "solana", reference: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp" }

// AND

ChainId.format({ namespace: "solana", reference: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp" });
// "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp"
```

## AccountId (CAIP-10)

### Object-oriented

```typescript
import { AccountId } from "caip-solana";

const accountId = new AccountId(
  "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp:7S3P4HxJpyyigGzodYwHtCxZyUQe9JiBMHyRWXArAaKv"
);

// OR

const accountId = new AccountId({
  chainId: { namespace: "solana", reference: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp" },
  address: "7S3P4HxJpyyigGzodYwHtCxZyUQe9JiBMHyRWXArAaKv",
});

// ALSO

const accountId = new AccountId({
  chainId: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
  address: "7S3P4HxJpyyigGzodYwHtCxZyUQe9JiBMHyRWXArAaKv",
});

// THEN

accountId.toString();
// "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp:7S3P4HxJpyyigGzodYwHtCxZyUQe9JiBMHyRWXArAaKv"

accountId.toJSON();
// { address: "7S3P4HxJpyyigGzodYwHtCxZyUQe9JiBMHyRWXArAaKv", chainId: { namespace: "solana", reference: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp" } }
```

### Functional

```typescript
import { AccountId } from "caip-solana";

AccountId.parse("solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp:7S3P4HxJpyyigGzodYwHtCxZyUQe9JiBMHyRWXArAaKv");
// { address: "7S3P4HxJpyyigGzodYwHtCxZyUQe9JiBMHyRWXArAaKv", chainId: { namespace: "solana", reference: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp" } }

// AND

AccountId.format({
  chainId: { namespace: "solana", reference: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp" },
  address: "7S3P4HxJpyyigGzodYwHtCxZyUQe9JiBMHyRWXArAaKv",
});
//"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp:7S3P4HxJpyyigGzodYwHtCxZyUQe9JiBMHyRWXArAaKv"

// OR

AccountId.format({
  chainId: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
  address: "7S3P4HxJpyyigGzodYwHtCxZyUQe9JiBMHyRWXArAaKv",
});
//"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp:7S3P4HxJpyyigGzodYwHtCxZyUQe9JiBMHyRWXArAaKv"
```

## AssetId (CAIP-19)

### Object-oriented

```typescript
import { AssetId } from "caip-solana";

const assetId = new AssetId(
  "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp/nft:Fz6LxeUg5qjesYX3BdmtTwyyzBtMxk644XiTqU5W3w9w"
);

// OR

const assetId = new AssetId({
  chainId: { namespace: "solana", reference: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp" },
  assetName: {
    namespace: "nft",
    reference: "Fz6LxeUg5qjesYX3BdmtTwyyzBtMxk644XiTqU5W3w9w",
  },
});

// ALSO

const assetId = new AssetId({
  chainId: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
  assetName: "nft:Fz6LxeUg5qjesYX3BdmtTwyyzBtMxk644XiTqU5W3w9w",
});

// THEN

assetId.toString();
// "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp/nft:Fz6LxeUg5qjesYX3BdmtTwyyzBtMxk644XiTqU5W3w9w"

assetId.toJSON();
// {
//   chainId: { namespace: "solana", reference: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp" },
//   assetName: { namespace: "nft", reference: "Fz6LxeUg5qjesYX3BdmtTwyyzBtMxk644XiTqU5W3w9w" },
// }
```

### Functional

```typescript
import { AssetId } from "caip-solana";

AssetId.parse("solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp/nft:Fz6LxeUg5qjesYX3BdmtTwyyzBtMxk644XiTqU5W3w9w");
// {
//   chainId: { namespace: "solana", reference: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp" },
//   assetName: { namespace: "nft", reference: "Fz6LxeUg5qjesYX3BdmtTwyyzBtMxk644XiTqU5W3w9w" },
// }

// AND

AssetId.format({
  chainId: { namespace: "solana", reference: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp" },
  assetName: {
    namespace: "nft",
    reference: "Fz6LxeUg5qjesYX3BdmtTwyyzBtMxk644XiTqU5W3w9w",
  },
});
// "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp/nft:Fz6LxeUg5qjesYX3BdmtTwyyzBtMxk644XiTqU5W3w9w"

// OR

AssetId.format({
  chainId: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
  assetName: "nft:Fz6LxeUg5qjesYX3BdmtTwyyzBtMxk644XiTqU5W3w9w",
});
// "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp/nft:Fz6LxeUg5qjesYX3BdmtTwyyzBtMxk644XiTqU5W3w9w"
```

## AssetType (CAIP-19)

### Object-oriented

```typescript
import { AssetType } from "caip-solana";

const assetType = new AssetType(
  "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp/nft:Fz6LxeUg5qjesYX3BdmtTwyyzBtMxk644XiTqU5W3w9w"
);

// OR

const assetType = new AssetType({
  chainId: { namespace: "solana", reference: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp" },
  assetName: {
    namespace: "nft",
    reference: "Fz6LxeUg5qjesYX3BdmtTwyyzBtMxk644XiTqU5W3w9w",
  },
});

// ALSO

const assetType = new AssetType({
  chainId: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
  assetName: "nft:Fz6LxeUg5qjesYX3BdmtTwyyzBtMxk644XiTqU5W3w9w",
});

// THEN

assetType.toString();
// "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp/nft:Fz6LxeUg5qjesYX3BdmtTwyyzBtMxk644XiTqU5W3w9w"

assetType.toJSON();
// {
//   chainId: { namespace: "solana", reference: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp" },
//   assetName: { namespace: "nft", reference: "Fz6LxeUg5qjesYX3BdmtTwyyzBtMxk644XiTqU5W3w9w" },
// }
```

### Functional

```typescript
import { AssetType } from "caip-solana";

AssetType.parse("solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp/nft:Fz6LxeUg5qjesYX3BdmtTwyyzBtMxk644XiTqU5W3w9w");
// {
//   chainId: { namespace: "solana", reference: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp" },
//   assetName: { namespace: "nft", reference: "Fz6LxeUg5qjesYX3BdmtTwyyzBtMxk644XiTqU5W3w9w" },
// }

// AND

AssetType.format({
  chainId: { namespace: "solana", reference: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp" },
  assetName: {
    namespace: "nft",
    reference: "Fz6LxeUg5qjesYX3BdmtTwyyzBtMxk644XiTqU5W3w9w",
  },
});
// "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp/nft:Fz6LxeUg5qjesYX3BdmtTwyyzBtMxk644XiTqU5W3w9w"

// OR

AssetType.format({
  chainId: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
  assetName: "nft:Fz6LxeUg5qjesYX3BdmtTwyyzBtMxk644XiTqU5W3w9w",
});
// "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp/nft:Fz6LxeUg5qjesYX3BdmtTwyyzBtMxk644XiTqU5W3w9w"
```
