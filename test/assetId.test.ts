import { AssetId } from "../src";

import * as data from "./data";

function assertInterface(result: AssetId) {
  expect(result.chainId.toString()).toEqual(data.CHAIN_ID_STRING);
  expect(result.assetName.toString()).toEqual(data.ASSET_NAME_STRING);
  expect(result.toString()).toEqual(data.ASSET_ID_STRING);
  expect(result.toJSON()).toEqual(data.ASSET_ID_NESTED_PARAMS);
}

describe("AssetId", () => {
  it("should parse string", async () => {
    const result = AssetId.parse(data.ASSET_ID_STRING);
    expect(result).toEqual(data.ASSET_ID_NESTED_PARAMS);
  });

  it("should format params", async () => {
    const result = AssetId.format(data.ASSET_ID_PARAMS);
    expect(result).toEqual(data.ASSET_ID_STRING);
  });

  it("should instantiate from params", async () => {
    const result = new AssetId(data.ASSET_ID_PARAMS);
    assertInterface(result);
  });

  it("should instantiate from string", async () => {
    const result = new AssetId(data.ASSET_ID_STRING);
    assertInterface(result);
  });

  it("should instantiate from nested params", async () => {
    const result = new AssetId(data.ASSET_ID_NESTED_PARAMS);
    assertInterface(result);
  });

  it("should support JSON.stringify", async () => {
    const result = new AssetId(data.ASSET_ID_PARAMS);
    const str = JSON.stringify(result);
    const json = JSON.parse(str);
    assertInterface(new AssetId(json));
  });
});
