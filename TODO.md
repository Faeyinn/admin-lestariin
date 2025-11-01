# TODO: Integrate report/all into Dashboard and Add API Verification

## Tasks
- [x] Update DashboardPage.tsx to fetch reports from REPORTS_ALL API and calculate real-time stats (total, verified, unverified, rejected)
- [x] Modify ReportCard.tsx to call REPORTS_VERIFY API on verification, handle success/error, update local state
- [x] Update ChartCard.tsx to fetch reports from REPORTS_ALL API and group by day of week for real-time chart data
- [x] Update MapView.tsx to properly integrate with REPORTS_ALL API data, using actual lat/lng coordinates and classifications (removed dummy data)
- [ ] Add admin authentication check for verification actions in ReportCard.tsx
- [ ] Test dashboard stats update with real data
- [ ] Test verification API call and error handling
- [ ] Ensure admin authentication for verification
