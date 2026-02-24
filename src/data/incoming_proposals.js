// Incoming Celo Governance Proposals (CGPs)
// Source: https://github.com/celo-org/governance/tree/main/CGPs
// Mondo: https://mondo.celo.org/
// Last updated: 2026-02-24T02:11:48.705Z

export const incomingProposals = [
  {
    "id": "cgp-0231",
    "title": "",
    "status": "DRAFT",
    "proposer": "'Nauman Mustafa (@nauman)'",
    "dateSubmitted": "2026-02-19",
    "fundingRequested": {
      "amount": 21738286,
      "token": "CELO",
      "usdEquivalent": null
    },
    "summary": "https://forum.celo.org/t/celo-infrastructure-for-chain-lifecycle-operational-support-ciclops-season-2-funding-request governance-proposal-id: date-executed: ---  Proposal Description ============================ This proposal requests $2.7M equivalent to 21,738,286 CELO at 90 day average price of $0.1242 in Season 2 funding to continue operating CICLOPS as Celo's core infrastructure coordination a",
    "githubUrl": "https://github.com/celo-org/governance/blob/main/CGPs/cgp-0231.md",
    "mondoUrl": null
  },
  {
    "id": "cgp-0230",
    "title": "",
    "status": "DRAFT",
    "proposer": "'cLabs Team'",
    "dateSubmitted": "2026-02-19",
    "fundingRequested": {
      "amount": 0,
      "token": "CELO",
      "usdEquivalent": null,
      "note": "Non Funding Proposal"
    },
    "summary": "https://forum.celo.org/t/update-intrinsic-gas-configuration-for-fee-abstraction/13014 governance-proposal-id: date-executed: ---",
    "githubUrl": "https://github.com/celo-org/governance/blob/main/CGPs/cgp-0230.md",
    "mondoUrl": null
  },
  {
    "id": "cgp-0229",
    "title": "Overview",
    "status": "DRAFT",
    "proposer": "\"@mentoLabs\"",
    "dateSubmitted": "2026-02-13",
    "fundingRequested": {
      "amount": 0,
      "token": "CELO",
      "usdEquivalent": null,
      "note": "Non Funding Proposal"
    },
    "summary": "https://forum.mento.org/t/mgp-15-mento-protocol-foundation-funding-request governance-proposal-id: date-executed: ---  # Overview  This proposal is a proxy governance proposal that mirrors Mento Governance Proposal 15 (MGP-15). As part of the ongoing coordination between the Celo community and the Mento community, Celo token holders have the opportunity to vote in Mento Governance with the Celo Co",
    "githubUrl": "https://github.com/celo-org/governance/blob/main/CGPs/cgp-0229.md",
    "mondoUrl": null
  },
  {
    "id": "cgp-0228",
    "title": "Overview",
    "status": "DRAFT",
    "proposer": "\"@mentoLabs\"",
    "dateSubmitted": "2026-02-13",
    "fundingRequested": {
      "amount": 0,
      "token": "CELO",
      "usdEquivalent": null,
      "note": "Non Funding Proposal"
    },
    "summary": "https://forum.mento.org/t/mgp-14-mento-v3-deployment-phase-1 governance-proposal-id: date-executed: ---  # Overview  This proposal is a proxy governance proposal that mirrors Mento Governance Proposal 14 (MGP-14). As part of the ongoing coordination between the Celo community and the Mento community, Celo token holders have the opportunity to vote in Mento Governance with the Celo Community fund M",
    "githubUrl": "https://github.com/celo-org/governance/blob/main/CGPs/cgp-0228.md",
    "mondoUrl": null
  },
  {
    "id": "cgp-0227",
    "title": "",
    "status": "DRAFT",
    "proposer": "'Prezenti (@prezenti)'",
    "dateSubmitted": "2026-02-12",
    "fundingRequested": {
      "amount": 3430000,
      "token": "CELO",
      "usdEquivalent": null
    },
    "summary": "This proposal requests **3,430,000 CELO tokens($276,400 cUSD)** to fund Prezenti's Season 2 operations from February through August 2026. Combined with $70,000 in carryover from Season 1, this provides **$346,400 total capacity** to operate Celo's direct grants program.  Prezenti focuses exclusively on funding builders aligned with ecosystem priorities, emphasizing applications that generate trans",
    "githubUrl": "https://github.com/celo-org/governance/blob/main/CGPs/cgp-0227.md",
    "mondoUrl": null
  },
  {
    "id": "cgp-0225",
    "title": "",
    "status": "PROPOSED",
    "proposer": "'Opera MiniPay (@opera_minipay)'",
    "dateSubmitted": "2026-02-05",
    "fundingRequested": {
      "amount": 950211,
      "token": "CELO",
      "usdEquivalent": null,
      "note": "⚠️ JSON amount (950,211 CELO) doesn't match markdown (212 CELO)"
    },
    "summary": "https://forum.celo.org/t/sustaining-and-expanding-minipay-as-celo-s-global-stablecoin-distribution-layer governance-proposal-id: 277 date-executed: ---",
    "githubUrl": "https://github.com/celo-org/governance/blob/main/CGPs/cgp-0225.md",
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
