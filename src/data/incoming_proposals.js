// Incoming Celo Governance Proposals (CGPs)
// Source: https://github.com/celo-org/governance/tree/main/CGPs
// Mondo: https://mondo.celo.org/
// Last updated: 2026-02-08T02:38:13.172Z

export const incomingProposals = [
  {
    "id": "cgp-0225",
    "title": "",
    "status": "DRAFT",
    "proposer": "'Opera MiniPay (@opera_minipay)'",
    "dateSubmitted": "2026-02-05",
    "fundingRequested": {
      "amount": 950211,
      "token": "CELO",
      "usdEquivalent": null,
      "note": "⚠️ JSON amount (950,211 CELO) doesn't match markdown (212 CELO)"
    },
    "summary": "https://forum.celo.org/t/sustaining-and-expanding-minipay-as-celo-s-global-stablecoin-distribution-layer/12958 governance-proposal-id:  date-executed:  ---",
    "githubUrl": "https://github.com/celo-org/governance/blob/main/CGPs/cgp-0225.md",
    "mondoUrl": null
  },
  {
    "id": "cgp-0224",
    "title": "",
    "status": "PROPOSED",
    "proposer": "'CeloFoundation'",
    "dateSubmitted": "2026-01-30",
    "fundingRequested": {
      "amount": 8880995,
      "token": "CELO",
      "usdEquivalent": null
    },
    "summary": "https://forum.celo.org/t/celo-foundation-season-2-funding-proposal governance-proposal-id: 276 date-executed:  ---",
    "githubUrl": "https://github.com/celo-org/governance/blob/main/CGPs/cgp-0224.md",
    "mondoUrl": null
  },
  {
    "id": "cgp-0223",
    "title": "1. Summary",
    "status": "PROPOSED",
    "proposer": "'Celo Governance (@celogovernance)'",
    "dateSubmitted": "2026-02-01",
    "fundingRequested": {
      "amount": 532000,
      "token": "CELO",
      "usdEquivalent": null
    },
    "summary": "https://forum.celo.org/t/celo-governance-guild-season-2-funding-request governance-proposal-id: 275 date-executed:  ---  Proposal Description ============================ # 1. Summary This proposal requests funding for the continuation and operation of the Celo Governance Guild during the 2026 governance year. The Governance Guild (formerly CGP Editors) serves as a neutral governance operations la",
    "githubUrl": "https://github.com/celo-org/governance/blob/main/CGPs/cgp-0223.md",
    "mondoUrl": null
  },
  {
    "id": "cgp-0222",
    "title": "",
    "status": "PROPOSED",
    "proposer": "'Michael (@MichaelCelo)'",
    "dateSubmitted": "2026-01-30",
    "fundingRequested": {
      "amount": 5622470,
      "token": "CELO",
      "usdEquivalent": null
    },
    "summary": "https://forum.celo.org/t/stabila-season-2-funding-request governance-proposal-id: 273 date-executed:  ---  Proposal Description ============================",
    "githubUrl": "https://github.com/celo-org/governance/blob/main/CGPs/cgp-0222.md",
    "mondoUrl": null
  },
  {
    "id": "cgp-0221",
    "title": "",
    "status": "DRAFT",
    "proposer": "\"@mentoLabs\"",
    "dateSubmitted": "2026-01-29",
    "fundingRequested": {
      "amount": 0,
      "token": "CELO",
      "usdEquivalent": null,
      "note": "Non Funding Proposal"
    },
    "summary": "MGP-13 enables a 5bps (0.05%) spread fee and increases the ValueDeltaBreaker circuit breaker thresholds from 10bps to 15bps (0.10% → 0.15%) for the following pairs:  1. `USDm/USDC` 2. `USDm/axlUSDC` 3. `USDm/USD₮`  The goals are to reduce breaker-induced downtime, improve protection against arbitrage losses, and enable protocol revenue on high-volume pairs.  This proposal updates two parameter set",
    "githubUrl": "https://github.com/celo-org/governance/blob/main/CGPs/cgp-0221.md",
    "mondoUrl": null
  },
  {
    "id": "cgp-0220",
    "title": "",
    "status": "PROPOSED",
    "proposer": "'cLabs Team'",
    "dateSubmitted": "2026-01-15",
    "fundingRequested": {
      "amount": 4355627,
      "token": "CELO",
      "usdEquivalent": null
    },
    "summary": "https://forum.celo.org/t/clabs-core-protocol-execution-season-2-h1-2026-funding-proposal governance-proposal-id: 274 date-executed: ---",
    "githubUrl": "https://github.com/celo-org/governance/blob/main/CGPs/cgp-0220.md",
    "mondoUrl": null
  },
  {
    "id": "cgp-0219",
    "title": "Payment Terms",
    "status": "DRAFT",
    "proposer": "'Goldo (@0xGoldo), 0xj4an-work (@0xj4an-work), Anthony (@Anthony), Skdt (@skdt)'",
    "dateSubmitted": "2026-01-22",
    "fundingRequested": {
      "amount": 355022,
      "token": "CELO",
      "usdEquivalent": null
    },
    "summary": "https://forum.celo.org/t/celo-communities-guild-season-2-funding-request governance-proposal-id: 272 date-executed: 2026-02-05 ---    Proposal Description ============================ This proposal requests funding to continue and scale the Celo Communities Guild throughout the period from January to June 2026, supporting its presence across [Discord](http://chat.celo.org/), [Telegram](http://t.me",
    "githubUrl": "https://github.com/celo-org/governance/blob/main/CGPs/cgp-0219.md",
    "mondoUrl": null
  }
];

// Helper function to format date
export const formatProposalDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

// Helper function to get status color
export const getStatusColor = (status) => {
  switch (status.toUpperCase()) {
    case 'DRAFT':
      return '#FFB74D'; // Orange
    case 'PROPOSED':
      return '#64B5F6'; // Blue
    case 'VOTING':
      return '#9575CD'; // Purple
    case 'APPROVED':
      return '#56DF7C'; // Green
    case 'REJECTED':
      return '#E57373'; // Red
    case 'EXECUTED':
      return '#FCFF52'; // Yellow
    default:
      return '#ccc'; // Gray
  }
};
