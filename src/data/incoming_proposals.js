// Incoming Celo Governance Proposals (CGPs)
// Source: https://github.com/celo-org/governance/tree/main/CGPs
// Mondo: https://mondo.celo.org/
// Last updated: 2026-03-16T02:33:09.285Z

export const incomingProposals = [
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
  },
  {
    "id": "cgp-0226",
    "title": "",
    "status": "DRAFT",
    "proposer": "\"Pavel Hornak, Martín Volpe (@martinvol)\"",
    "dateSubmitted": "2025-10-10",
    "fundingRequested": {
      "amount": 0,
      "token": "CELO",
      "usdEquivalent": null,
      "note": "Non Funding Proposal"
    },
    "summary": "governance-proposal-id: date-executed: ---",
    "githubUrl": "https://github.com/celo-org/governance/blob/main/CGPs/cgp-0226.md",
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
