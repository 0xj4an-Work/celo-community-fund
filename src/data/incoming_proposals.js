// Incoming Celo Governance Proposals (CGPs)
// Source: https://github.com/celo-org/governance/tree/main/CGPs
// Mondo: https://mondo.celo.org/
// Last updated: 2026-05-07T02:56:12.207Z

export const incomingProposals = [
  {
    "id": "cgp-0236",
    "title": "",
    "status": "DRAFT",
    "proposer": "\"Celo Core Co.\"",
    "dateSubmitted": "2026-04-21",
    "fundingRequested": {
      "amount": 0,
      "token": "CELO",
      "usdEquivalent": null,
      "note": "Non Funding Proposal"
    },
    "summary": "This proposal implements one of the four changes outlined in the [CELOccelerate tokenomics temperature check (CGP-0233)](https://mondo.celo.org/governance/286), which recently passed governance. Specifically, it executes item 4: pausing carbon offset fund contributions.  It pauses the fee-based carbon fund distributions on the FeeHandler (currently 10% of transaction fees) by setting the carbon fr",
    "githubUrl": "https://github.com/celo-org/governance/blob/main/CGPs/cgp-0236.md",
    "mondoUrl": null
  },
  {
    "id": "cgp-0235",
    "title": "",
    "status": "DRAFT",
    "proposer": "\"Aaron Boyd (Thylacine), Mohamed Sohail (kamikazechaser)\"",
    "dateSubmitted": "2026-04-10",
    "fundingRequested": {
      "amount": 0,
      "token": "CELO",
      "usdEquivalent": null,
      "note": "Non Funding Proposal"
    },
    "summary": "* Reduce group deregister duration from 15552000 (180 days), to 604800 (1 week) * Reduce validator deregister duration from 5184000 seconds (60 days), to 259200 (3 days) * There will be no change to the locked gold requirements (10000000000000000000000 wei)",
    "githubUrl": "https://github.com/celo-org/governance/blob/main/CGPs/cgp-0235.md",
    "mondoUrl": null
  },
  {
    "id": "cgp-0234",
    "title": "Should return at least 1748950000000000000000000",
    "status": "DRAFT",
    "proposer": "\"Celo Core Co.\"",
    "dateSubmitted": "2026-04-07",
    "fundingRequested": {
      "amount": 0,
      "token": "CELO",
      "usdEquivalent": null,
      "note": "Non Funding Proposal"
    },
    "summary": "As part of the CELOccelerate initiative, Celo Core Co. returned 1,748,950 CELO in sequencer revenue to the Community Fund (see [transaction](https://celoscan.io/tx/0xfbe1dac031726b6f580b561bfc2a80262b9529d09e4463fc3600cc74dce31a86)).  This proposal follows the discussion on Governance Call #88 and the [CELOccelerate tokenomics proposal](https://forum.celo.org/t/celoccelerate-celo-tokenomics-propos",
    "githubUrl": "https://github.com/celo-org/governance/blob/main/CGPs/cgp-0234.md",
    "mondoUrl": null
  },
  {
    "id": "cgp-0233",
    "title": "",
    "status": "DRAFT",
    "proposer": "\"Celo Core Co.\"",
    "dateSubmitted": "2026-04-07",
    "fundingRequested": {
      "amount": 0,
      "token": "CELO",
      "usdEquivalent": null,
      "note": "Non Funding Proposal"
    },
    "summary": "https://forum.celo.org/t/celoccelerate-celo-tokenomics-proposal/13147/1 governance-proposal-id: 286 date-executed: ---  > **This is a temperature check proposal.** It contains **no on-chain transactions**. Its purpose is to gauge community sentiment on the CELOccelerate tokenomics direction before any binding, executable proposals are submitted. A \"Yes\" vote signals support for the four changes ou",
    "githubUrl": "https://github.com/celo-org/governance/blob/main/CGPs/cgp-0233.md",
    "mondoUrl": null
  },
  {
    "id": "cgp-0232",
    "title": "Should return 0xF424B5e85B290b66aC20f8A9EAB75E25a526725E",
    "status": "DRAFT",
    "proposer": "\"Pavel Hornak\"",
    "dateSubmitted": "2026-03-18",
    "fundingRequested": {
      "amount": 0,
      "token": "CELO",
      "usdEquivalent": null,
      "note": "Non Funding Proposal"
    },
    "summary": "https://forum.celo.org/t/celos-next-chapter-opera-proposal-to-transition-from-distribution-partner-to-network-stakeholder/13124 governance-proposal-id: date-executed: ---",
    "githubUrl": "https://github.com/celo-org/governance/blob/main/CGPs/cgp-0232.md",
    "mondoUrl": null
  },
  {
    "id": "cgp-0230",
    "title": "",
    "status": "PROPOSED",
    "proposer": "'cLabs Team'",
    "dateSubmitted": "2026-02-19",
    "fundingRequested": {
      "amount": 0,
      "token": "CELO",
      "usdEquivalent": null,
      "note": "Non Funding Proposal"
    },
    "summary": "https://forum.celo.org/t/update-intrinsic-gas-configuration-for-fee-abstraction governance-proposal-id: 283 date-executed: ---",
    "githubUrl": "https://github.com/celo-org/governance/blob/main/CGPs/cgp-0230.md",
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
    "summary": "https://forum.mento.org/t/mgp-14-mento-v3-deployment-phase-1 governance-proposal-id: 279 date-executed: ---  # Overview  This proposal is a proxy governance proposal that mirrors Mento Governance Proposal 14 (MGP-14). As part of the ongoing coordination between the Celo community and the Mento community, Celo token holders have the opportunity to vote in Mento Governance with the Celo Community fu",
    "githubUrl": "https://github.com/celo-org/governance/blob/main/CGPs/cgp-0228.md",
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
