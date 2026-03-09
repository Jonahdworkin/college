export const colleges = [
  { id: 1, name: "Harvard University", location: "Cambridge, MA", type: "Private Research University", admissionRate: 3.6,
    decisions: {
      ea: { label: "Restrictive Early Action (REA)", deadline: "November 1", history: [{year:2021,month:12,day:17},{year:2022,month:12,day:15},{year:2023,month:12,day:14},{year:2024,month:12,day:13}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 1", history: [{year:2022,month:3,day:31},{year:2023,month:3,day:30},{year:2024,month:3,day:28},{year:2025,month:3,day:27}], predictedYear: 2027 } } },
  { id: 2, name: "Yale University", location: "New Haven, CT", type: "Private Research University", admissionRate: 4.6,
    decisions: {
      ea: { label: "Restrictive Early Action (REA)", deadline: "November 1", history: [{year:2021,month:12,day:17},{year:2022,month:12,day:15},{year:2023,month:12,day:14},{year:2024,month:12,day:19}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 2", history: [{year:2022,month:3,day:31},{year:2023,month:3,day:30},{year:2024,month:3,day:28},{year:2025,month:3,day:27}], predictedYear: 2027 } } },
  { id: 3, name: "Princeton University", location: "Princeton, NJ", type: "Private Research University", admissionRate: 4.7,
    decisions: {
      ea: { label: "Restrictive Early Action (REA)", deadline: "November 1", history: [{year:2021,month:12,day:17},{year:2022,month:12,day:15},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 1", history: [{year:2022,month:3,day:31},{year:2023,month:3,day:30},{year:2024,month:3,day:28},{year:2025,month:3,day:26}], predictedYear: 2027 } } },
  { id: 4, name: "Columbia University", location: "New York, NY", type: "Private Research University", admissionRate: 3.9,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:15},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 1", history: [{year:2022,month:4,day:1},{year:2023,month:4,day:1},{year:2024,month:4,day:1},{year:2025,month:4,day:1}], predictedYear: 2027 } } },
  { id: 5, name: "University of Pennsylvania", location: "Philadelphia, PA", type: "Private Research University", admissionRate: 5.9,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:15},{year:2022,month:12,day:14},{year:2023,month:12,day:12},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 5", history: [{year:2022,month:4,day:1},{year:2023,month:4,day:1},{year:2024,month:4,day:1},{year:2025,month:4,day:1}], predictedYear: 2027 } } },
  { id: 6, name: "Dartmouth College", location: "Hanover, NH", type: "Private Research University", admissionRate: 6.2,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:15},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 2", history: [{year:2022,month:4,day:1},{year:2023,month:4,day:1},{year:2024,month:4,day:1},{year:2025,month:4,day:3}], predictedYear: 2027 } } },
  { id: 7, name: "Brown University", location: "Providence, RI", type: "Private Research University", admissionRate: 5.2,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:15},{year:2022,month:12,day:14},{year:2023,month:12,day:12},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 5", history: [{year:2022,month:4,day:1},{year:2023,month:4,day:1},{year:2024,month:4,day:1},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 8, name: "Cornell University", location: "Ithaca, NY", type: "Private Research University", admissionRate: 8.7,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:10},{year:2022,month:12,day:12},{year:2023,month:12,day:12},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 2", history: [{year:2022,month:3,day:31},{year:2023,month:4,day:6},{year:2024,month:3,day:28},{year:2025,month:3,day:27}], predictedYear: 2027 } } },
  { id: 9, name: "MIT", location: "Cambridge, MA", type: "Private Research University", admissionRate: 3.9,
    decisions: {
      ea: { label: "Early Action (EA)", deadline: "November 1", history: [{year:2021,month:12,day:17},{year:2022,month:12,day:16},{year:2023,month:12,day:14},{year:2024,month:12,day:20}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 1", history: [{year:2022,month:3,day:18},{year:2023,month:3,day:18},{year:2024,month:3,day:14},{year:2025,month:3,day:14}], predictedYear: 2027 } } },
  { id: 10, name: "Stanford University", location: "Stanford, CA", type: "Private Research University", admissionRate: 3.7,
    decisions: {
      ea: { label: "Restrictive Early Action (REA)", deadline: "November 1", history: [{year:2021,month:12,day:15},{year:2022,month:12,day:14},{year:2023,month:12,day:12},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 2", history: [{year:2022,month:4,day:1},{year:2023,month:3,day:31},{year:2024,month:4,day:1},{year:2025,month:3,day:27}], predictedYear: 2027 } } },
  { id: 11, name: "Caltech", location: "Pasadena, CA", type: "Private Research University", admissionRate: 3.9,
    decisions: {
      ea: { label: "Early Action (EA)", deadline: "November 1", history: [{year:2021,month:12,day:15},{year:2022,month:12,day:15},{year:2023,month:12,day:15},{year:2024,month:12,day:16}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 3", history: [{year:2022,month:3,day:15},{year:2023,month:3,day:15},{year:2024,month:3,day:15},{year:2025,month:3,day:14}], predictedYear: 2027 } } },
  { id: 12, name: "Duke University", location: "Durham, NC", type: "Private Research University", admissionRate: 6.2,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:16},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 2", history: [{year:2022,month:3,day:28},{year:2023,month:3,day:27},{year:2024,month:3,day:28},{year:2025,month:3,day:27}], predictedYear: 2027 } } },
  { id: 13, name: "University of Chicago", location: "Chicago, IL", type: "Private Research University", admissionRate: 5.4,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:16},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 2", history: [{year:2022,month:3,day:30},{year:2023,month:3,day:31},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 14, name: "Northwestern University", location: "Evanston, IL", type: "Private Research University", admissionRate: 6.8,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:12},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 1", history: [{year:2022,month:4,day:1},{year:2023,month:3,day:29},{year:2024,month:3,day:26},{year:2025,month:3,day:26}], predictedYear: 2027 } } },
  { id: 15, name: "Johns Hopkins University", location: "Baltimore, MD", type: "Private Research University", admissionRate: 8.0,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:13},{year:2023,month:12,day:12},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 2", history: [{year:2022,month:3,day:17},{year:2023,month:3,day:16},{year:2024,month:3,day:20},{year:2025,month:3,day:21}], predictedYear: 2027 } } },
  { id: 16, name: "Vanderbilt University", location: "Nashville, TN", type: "Private Research University", admissionRate: 5.5,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:15},{year:2022,month:12,day:14},{year:2023,month:12,day:12},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 1", history: [{year:2022,month:4,day:1},{year:2023,month:4,day:1},{year:2024,month:3,day:28},{year:2025,month:3,day:27}], predictedYear: 2027 } } },
  { id: 17, name: "Rice University", location: "Houston, TX", type: "Private Research University", admissionRate: 8.9,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 1", history: [{year:2022,month:4,day:1},{year:2023,month:3,day:30},{year:2024,month:3,day:28},{year:2025,month:3,day:27}], predictedYear: 2027 } } },
  { id: 18, name: "Washington University in St. Louis", location: "St. Louis, MO", type: "Private Research University", admissionRate: 11.3,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:12},{year:2023,month:12,day:12},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 2", history: [{year:2022,month:3,day:21},{year:2023,month:3,day:14},{year:2024,month:3,day:14},{year:2025,month:3,day:14}], predictedYear: 2027 } } },
  { id: 19, name: "University of Notre Dame", location: "Notre Dame, IN", type: "Private Research University", admissionRate: 12.6,
    decisions: {
      ea: { label: "Restrictive Early Action (REA)", deadline: "November 1", history: [{year:2021,month:12,day:17},{year:2022,month:12,day:15},{year:2023,month:12,day:14},{year:2024,month:12,day:20}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 1", history: [{year:2022,month:4,day:4},{year:2023,month:4,day:3},{year:2024,month:3,day:29},{year:2025,month:3,day:27}], predictedYear: 2027 } } },
  { id: 20, name: "Georgetown University", location: "Washington, DC", type: "Private Research University", admissionRate: 12.0,
    decisions: {
      ea: { label: "Restrictive Early Action (REA)", deadline: "November 1", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:13}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 10", history: [{year:2022,month:3,day:21},{year:2023,month:3,day:20},{year:2024,month:3,day:15},{year:2025,month:3,day:20}], predictedYear: 2027 } } },
  { id: 21, name: "Carnegie Mellon University", location: "Pittsburgh, PA", type: "Private Research University", admissionRate: 11.4,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:15},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 3", history: [{year:2022,month:4,day:1},{year:2023,month:3,day:31},{year:2024,month:3,day:28},{year:2025,month:3,day:14}], predictedYear: 2027 } } },
  { id: 22, name: "Williams College", location: "Williamstown, MA", type: "Liberal Arts College", admissionRate: 9.7,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 15", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:12},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 10", history: [{year:2022,month:4,day:1},{year:2023,month:3,day:31},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 23, name: "Amherst College", location: "Amherst, MA", type: "Liberal Arts College", admissionRate: 9.2,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:12},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 1", history: [{year:2022,month:4,day:1},{year:2023,month:3,day:31},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 24, name: "Swarthmore College", location: "Swarthmore, PA", type: "Liberal Arts College", admissionRate: 8.4,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 15", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 2", history: [{year:2022,month:4,day:1},{year:2023,month:4,day:1},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 25, name: "Pomona College", location: "Claremont, CA", type: "Liberal Arts College", admissionRate: 7.6,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 15", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:15},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 8", history: [{year:2022,month:4,day:1},{year:2023,month:3,day:31},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 26, name: "Wellesley College", location: "Wellesley, MA", type: "Liberal Arts College", admissionRate: 14.9,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 15", history: [{year:2022,month:4,day:1},{year:2023,month:3,day:31},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 27, name: "Bowdoin College", location: "Brunswick, ME", type: "Liberal Arts College", admissionRate: 8.9,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 15", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 5", history: [{year:2022,month:4,day:1},{year:2023,month:3,day:31},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 28, name: "Middlebury College", location: "Middlebury, VT", type: "Liberal Arts College", admissionRate: 14.1,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 3", history: [{year:2022,month:4,day:1},{year:2023,month:3,day:31},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 29, name: "Carleton College", location: "Northfield, MN", type: "Liberal Arts College", admissionRate: 17.6,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 15", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 15", history: [{year:2022,month:3,day:31},{year:2023,month:3,day:30},{year:2024,month:3,day:28},{year:2025,month:3,day:27}], predictedYear: 2027 } } },
  { id: 30, name: "Harvey Mudd College", location: "Claremont, CA", type: "Liberal Arts College", admissionRate: 10.8,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 15", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 5", history: [{year:2022,month:4,day:1},{year:2023,month:3,day:31},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 31, name: "Haverford College", location: "Haverford, PA", type: "Liberal Arts College", admissionRate: 15.4,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 15", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 15", history: [{year:2022,month:4,day:1},{year:2023,month:3,day:31},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 32, name: "Colby College", location: "Waterville, ME", type: "Liberal Arts College", admissionRate: 12.9,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 1", history: [{year:2022,month:4,day:1},{year:2023,month:3,day:31},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 33, name: "Colgate University", location: "Hamilton, NY", type: "Liberal Arts College", admissionRate: 17.6,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 15", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 15", history: [{year:2022,month:3,day:25},{year:2023,month:3,day:24},{year:2024,month:3,day:22},{year:2025,month:3,day:21}], predictedYear: 2027 } } },
  { id: 34, name: "Hamilton College", location: "Clinton, NY", type: "Liberal Arts College", admissionRate: 14.8,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 15", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 1", history: [{year:2022,month:4,day:1},{year:2023,month:3,day:31},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 35, name: "Wesleyan University", location: "Middletown, CT", type: "Liberal Arts College", admissionRate: 16.2,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 15", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 1", history: [{year:2022,month:4,day:1},{year:2023,month:3,day:31},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 36, name: "Vassar College", location: "Poughkeepsie, NY", type: "Liberal Arts College", admissionRate: 21.6,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 15", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 1", history: [{year:2022,month:3,day:31},{year:2023,month:3,day:30},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 37, name: "Barnard College", location: "New York, NY", type: "Liberal Arts College", admissionRate: 9.1,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:12},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 1", history: [{year:2022,month:4,day:1},{year:2023,month:4,day:1},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 38, name: "Grinnell College", location: "Grinnell, IA", type: "Liberal Arts College", admissionRate: 12.7,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 15", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 15", history: [{year:2022,month:4,day:1},{year:2023,month:3,day:31},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 39, name: "Smith College", location: "Northampton, MA", type: "Liberal Arts College", admissionRate: 30.4,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 15", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 15", history: [{year:2022,month:4,day:1},{year:2023,month:3,day:31},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 40, name: "Bryn Mawr College", location: "Bryn Mawr, PA", type: "Liberal Arts College", admissionRate: 30.0,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 15", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 15", history: [{year:2022,month:4,day:1},{year:2023,month:3,day:31},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 41, name: "Oberlin College", location: "Oberlin, OH", type: "Liberal Arts College", admissionRate: 29.0,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 15", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 15", history: [{year:2022,month:4,day:1},{year:2023,month:3,day:31},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 42, name: "Macalester College", location: "St. Paul, MN", type: "Liberal Arts College", admissionRate: 35.1,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 15", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 15", history: [{year:2022,month:3,day:28},{year:2023,month:3,day:27},{year:2024,month:3,day:25},{year:2025,month:3,day:24}], predictedYear: 2027 } } },
  { id: 43, name: "Davidson College", location: "Davidson, NC", type: "Liberal Arts College", admissionRate: 18.9,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 15", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 2", history: [{year:2022,month:4,day:1},{year:2023,month:3,day:31},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 44, name: "Bates College", location: "Lewiston, ME", type: "Liberal Arts College", admissionRate: 13.2,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 15", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 15", history: [{year:2022,month:3,day:25},{year:2023,month:3,day:24},{year:2024,month:3,day:22},{year:2025,month:3,day:21}], predictedYear: 2027 } } },
  { id: 45, name: "Claremont McKenna College", location: "Claremont, CA", type: "Liberal Arts College", admissionRate: 9.0,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 10", history: [{year:2022,month:4,day:1},{year:2023,month:3,day:31},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 46, name: "Scripps College", location: "Claremont, CA", type: "Liberal Arts College", admissionRate: 18.0,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 5", history: [{year:2022,month:4,day:1},{year:2023,month:3,day:31},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 47, name: "Pitzer College", location: "Claremont, CA", type: "Liberal Arts College", admissionRate: 13.6,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 1", history: [{year:2022,month:4,day:1},{year:2023,month:3,day:31},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 48, name: "New York University", location: "New York, NY", type: "Private Research University", admissionRate: 12.2,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:15},{year:2023,month:12,day:12},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 1", history: [{year:2022,month:4,day:1},{year:2023,month:4,day:1},{year:2024,month:4,day:1},{year:2025,month:4,day:1}], predictedYear: 2027 } } },
  { id: 49, name: "Boston University", location: "Boston, MA", type: "Private Research University", admissionRate: 17.5,
    decisions: {
      ea: { label: "Early Action (EA)", deadline: "November 1", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:13}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 2", history: [{year:2022,month:3,day:25},{year:2023,month:3,day:24},{year:2024,month:3,day:22},{year:2025,month:3,day:21}], predictedYear: 2027 } } },
  { id: 50, name: "Northeastern University", location: "Boston, MA", type: "Private Research University", admissionRate: 6.8,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 1", history: [{year:2022,month:3,day:31},{year:2023,month:3,day:30},{year:2024,month:3,day:28},{year:2025,month:3,day:27}], predictedYear: 2027 } } },
  { id: 51, name: "Boston College", location: "Chestnut Hill, MA", type: "Private Research University", admissionRate: 19.5,
    decisions: {
      ea: { label: "Early Action (EA)", deadline: "November 1", history: [{year:2021,month:12,day:25},{year:2022,month:12,day:20},{year:2023,month:12,day:24},{year:2024,month:12,day:25}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 1", history: [{year:2022,month:4,day:1},{year:2023,month:3,day:30},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 52, name: "Tufts University", location: "Medford, MA", type: "Private Research University", admissionRate: 11.1,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:12},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 1", history: [{year:2022,month:4,day:1},{year:2023,month:3,day:31},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 53, name: "Emory University", location: "Atlanta, GA", type: "Private Research University", admissionRate: 11.3,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 2", history: [{year:2022,month:4,day:1},{year:2023,month:3,day:31},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 54, name: "University of Southern California", location: "Los Angeles, CA", type: "Private Research University", admissionRate: 11.3,
    decisions: {
      ea: { label: "Early Action (EA)", deadline: "December 1", history: [{year:2022,month:1,day:1},{year:2023,month:1,day:1},{year:2024,month:1,day:1},{year:2025,month:1,day:1}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 15", history: [{year:2022,month:4,day:1},{year:2023,month:4,day:1},{year:2024,month:4,day:1},{year:2025,month:4,day:1}], predictedYear: 2027 } } },
  { id: 55, name: "Tulane University", location: "New Orleans, LA", type: "Private Research University", admissionRate: 13.0,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 15", history: [{year:2022,month:3,day:31},{year:2023,month:3,day:30},{year:2024,month:3,day:28},{year:2025,month:3,day:27}], predictedYear: 2027 } } },
  { id: 56, name: "Wake Forest University", location: "Winston-Salem, NC", type: "Private Research University", admissionRate: 29.9,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 15", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 1", history: [{year:2022,month:4,day:1},{year:2023,month:3,day:31},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 57, name: "Case Western Reserve University", location: "Cleveland, OH", type: "Private Research University", admissionRate: 30.2,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 15", history: [{year:2022,month:3,day:21},{year:2023,month:3,day:20},{year:2024,month:3,day:21},{year:2025,month:3,day:20}], predictedYear: 2027 } } },
  { id: 58, name: "University of Rochester", location: "Rochester, NY", type: "Private Research University", admissionRate: 29.7,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 5", history: [{year:2022,month:3,day:25},{year:2023,month:3,day:24},{year:2024,month:3,day:22},{year:2025,month:3,day:21}], predictedYear: 2027 } } },
  { id: 59, name: "Lehigh University", location: "Bethlehem, PA", type: "Private Research University", admissionRate: 39.0,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 15", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 15", history: [{year:2022,month:3,day:21},{year:2023,month:3,day:20},{year:2024,month:3,day:18},{year:2025,month:3,day:17}], predictedYear: 2027 } } },
  { id: 60, name: "George Washington University", location: "Washington, DC", type: "Private Research University", admissionRate: 47.2,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 5", history: [{year:2022,month:4,day:1},{year:2023,month:3,day:31},{year:2024,month:3,day:28},{year:2025,month:3,day:27}], predictedYear: 2027 } } },
  { id: 61, name: "Villanova University", location: "Villanova, PA", type: "Private Research University", admissionRate: 29.0,
    decisions: {
      ea: { label: "Early Action (EA)", deadline: "November 1", history: [{year:2021,month:12,day:20},{year:2022,month:12,day:20},{year:2023,month:12,day:20},{year:2024,month:12,day:20}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 15", history: [{year:2022,month:3,day:25},{year:2023,month:3,day:24},{year:2024,month:3,day:22},{year:2025,month:3,day:21}], predictedYear: 2027 } } },
  { id: 62, name: "Fordham University", location: "New York, NY", type: "Private Research University", admissionRate: 46.1,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 1", history: [{year:2022,month:3,day:21},{year:2023,month:3,day:20},{year:2024,month:3,day:18},{year:2025,month:3,day:17}], predictedYear: 2027 } } },
  { id: 63, name: "Brandeis University", location: "Waltham, MA", type: "Private Research University", admissionRate: 30.0,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 1", history: [{year:2022,month:3,day:21},{year:2023,month:3,day:20},{year:2024,month:3,day:18},{year:2025,month:3,day:17}], predictedYear: 2027 } } },
  { id: 64, name: "American University", location: "Washington, DC", type: "Private Research University", admissionRate: 35.0,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 15", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 15", history: [{year:2022,month:3,day:21},{year:2023,month:3,day:20},{year:2024,month:3,day:18},{year:2025,month:3,day:17}], predictedYear: 2027 } } },
  { id: 65, name: "University of Miami", location: "Coral Gables, FL", type: "Private Research University", admissionRate: 27.0,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "February 1", history: [{year:2022,month:4,day:1},{year:2023,month:4,day:1},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 66, name: "Babson College", location: "Wellesley, MA", type: "Private University", admissionRate: 24.0,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "February 1", history: [{year:2022,month:3,day:21},{year:2023,month:3,day:20},{year:2024,month:3,day:18},{year:2025,month:3,day:17}], predictedYear: 2027 } } },
  { id: 67, name: "Bentley University", location: "Waltham, MA", type: "Private University", admissionRate: 44.0,
    decisions: {
      ea: { label: "Early Action (EA)", deadline: "December 1", history: [{year:2022,month:1,day:31},{year:2023,month:1,day:31},{year:2024,month:1,day:31},{year:2025,month:1,day:31}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "February 1", history: [{year:2022,month:3,day:18},{year:2023,month:3,day:17},{year:2024,month:3,day:15},{year:2025,month:3,day:14}], predictedYear: 2027 } } },
  { id: 68, name: "Bucknell University", location: "Lewisburg, PA", type: "Liberal Arts College", admissionRate: 37.0,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 15", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 15", history: [{year:2022,month:3,day:25},{year:2023,month:3,day:24},{year:2024,month:3,day:22},{year:2025,month:3,day:21}], predictedYear: 2027 } } },
  { id: 69, name: "Trinity College", location: "Hartford, CT", type: "Liberal Arts College", admissionRate: 31.8,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 15", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 15", history: [{year:2022,month:4,day:1},{year:2023,month:3,day:31},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 70, name: "Lafayette College", location: "Easton, PA", type: "Liberal Arts College", admissionRate: 35.0,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 15", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 15", history: [{year:2022,month:4,day:1},{year:2023,month:3,day:31},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 71, name: "Gettysburg College", location: "Gettysburg, PA", type: "Liberal Arts College", admissionRate: 39.0,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 15", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "February 1", history: [{year:2022,month:3,day:21},{year:2023,month:3,day:20},{year:2024,month:3,day:18},{year:2025,month:3,day:17}], predictedYear: 2027 } } },
  { id: 72, name: "Dickinson College", location: "Carlisle, PA", type: "Liberal Arts College", admissionRate: 42.0,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 15", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "February 1", history: [{year:2022,month:3,day:21},{year:2023,month:3,day:20},{year:2024,month:3,day:18},{year:2025,month:3,day:17}], predictedYear: 2027 } } },
  { id: 73, name: "Skidmore College", location: "Saratoga Springs, NY", type: "Liberal Arts College", admissionRate: 28.0,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 15", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 15", history: [{year:2022,month:4,day:1},{year:2023,month:3,day:31},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 74, name: "Kenyon College", location: "Gambier, OH", type: "Liberal Arts College", admissionRate: 31.0,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 15", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "February 1", history: [{year:2022,month:3,day:21},{year:2023,month:3,day:20},{year:2024,month:3,day:18},{year:2025,month:3,day:17}], predictedYear: 2027 } } },
  { id: 75, name: "Denison University", location: "Granville, OH", type: "Liberal Arts College", admissionRate: 26.0,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 15", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 15", history: [{year:2022,month:3,day:21},{year:2023,month:3,day:20},{year:2024,month:3,day:18},{year:2025,month:3,day:17}], predictedYear: 2027 } } },
  { id: 76, name: "University of Richmond", location: "Richmond, VA", type: "Liberal Arts College", admissionRate: 26.0,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 15", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 15", history: [{year:2022,month:4,day:1},{year:2023,month:3,day:31},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 77, name: "Holy Cross College", location: "Worcester, MA", type: "Liberal Arts College", admissionRate: 35.0,
    decisions: {
      ea: { label: "Early Action (EA)", deadline: "December 1", history: [{year:2022,month:1,day:14},{year:2023,month:1,day:13},{year:2024,month:1,day:12},{year:2025,month:1,day:10}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 15", history: [{year:2022,month:3,day:25},{year:2023,month:3,day:24},{year:2024,month:3,day:22},{year:2025,month:3,day:21}], predictedYear: 2027 } } },
  { id: 78, name: "Rhodes College", location: "Memphis, TN", type: "Liberal Arts College", admissionRate: 37.0,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "February 1", history: [{year:2022,month:3,day:21},{year:2023,month:3,day:20},{year:2024,month:3,day:18},{year:2025,month:3,day:17}], predictedYear: 2027 } } },
  { id: 79, name: "Connecticut College", location: "New London, CT", type: "Liberal Arts College", admissionRate: 34.0,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 15", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 15", history: [{year:2022,month:3,day:25},{year:2023,month:3,day:24},{year:2024,month:3,day:22},{year:2025,month:3,day:21}], predictedYear: 2027 } } },
  { id: 80, name: "Union College", location: "Schenectady, NY", type: "Liberal Arts College", admissionRate: 40.0,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 15", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "February 1", history: [{year:2022,month:3,day:21},{year:2023,month:3,day:20},{year:2024,month:3,day:18},{year:2025,month:3,day:17}], predictedYear: 2027 } } },
  { id: 81, name: "Drexel University", location: "Philadelphia, PA", type: "Private Research University", admissionRate: 67.0,
    decisions: {
      ea: { label: "Early Action (EA)", deadline: "November 1", history: [{year:2021,month:12,day:20},{year:2022,month:12,day:20},{year:2023,month:12,day:20},{year:2024,month:12,day:20}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "March 1", history: [{year:2022,month:3,day:15},{year:2023,month:3,day:15},{year:2024,month:3,day:15},{year:2025,month:3,day:15}], predictedYear: 2027 } } },
  { id: 82, name: "Syracuse University", location: "Syracuse, NY", type: "Private Research University", admissionRate: 60.0,
    decisions: {
      ea: { label: "Early Action (EA)", deadline: "November 15", history: [{year:2021,month:12,day:20},{year:2022,month:12,day:20},{year:2023,month:12,day:20},{year:2024,month:12,day:20}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 1", history: [{year:2022,month:3,day:21},{year:2023,month:3,day:20},{year:2024,month:3,day:18},{year:2025,month:3,day:17}], predictedYear: 2027 } } },
  { id: 83, name: "Loyola Marymount University", location: "Los Angeles, CA", type: "Private University", admissionRate: 52.0,
    decisions: {
      ea: { label: "Early Action (EA)", deadline: "November 1", history: [{year:2021,month:12,day:20},{year:2022,month:12,day:20},{year:2023,month:12,day:20},{year:2024,month:12,day:20}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "February 1", history: [{year:2022,month:3,day:21},{year:2023,month:3,day:20},{year:2024,month:3,day:18},{year:2025,month:3,day:17}], predictedYear: 2027 } } },
  { id: 84, name: "University of California, Los Angeles", location: "Los Angeles, CA", type: "Public Research University", admissionRate: 9.2,
    decisions: {
      rd: { label: "Regular Decision", deadline: "November 30", history: [{year:2022,month:3,day:18},{year:2023,month:3,day:17},{year:2024,month:3,day:15},{year:2025,month:3,day:14}], predictedYear: 2027 } } },
  { id: 85, name: "University of California, Berkeley", location: "Berkeley, CA", type: "Public Research University", admissionRate: 11.4,
    decisions: {
      rd: { label: "Regular Decision", deadline: "November 30", history: [{year:2022,month:3,day:25},{year:2023,month:3,day:24},{year:2024,month:3,day:22},{year:2025,month:3,day:21}], predictedYear: 2027 } } },
  { id: 86, name: "UC San Diego", location: "La Jolla, CA", type: "Public Research University", admissionRate: 24.7,
    decisions: {
      rd: { label: "Regular Decision", deadline: "November 30", history: [{year:2022,month:3,day:18},{year:2023,month:3,day:17},{year:2024,month:3,day:15},{year:2025,month:3,day:14}], predictedYear: 2027 } } },
  { id: 87, name: "UC Santa Barbara", location: "Santa Barbara, CA", type: "Public Research University", admissionRate: 26.9,
    decisions: {
      rd: { label: "Regular Decision", deadline: "November 30", history: [{year:2022,month:3,day:18},{year:2023,month:3,day:17},{year:2024,month:3,day:15},{year:2025,month:3,day:14}], predictedYear: 2027 } } },
  { id: 88, name: "UC Irvine", location: "Irvine, CA", type: "Public Research University", admissionRate: 21.2,
    decisions: {
      rd: { label: "Regular Decision", deadline: "November 30", history: [{year:2022,month:3,day:18},{year:2023,month:3,day:17},{year:2024,month:3,day:15},{year:2025,month:3,day:14}], predictedYear: 2027 } } },
  { id: 89, name: "UC Davis", location: "Davis, CA", type: "Public Research University", admissionRate: 39.1,
    decisions: {
      rd: { label: "Regular Decision", deadline: "November 30", history: [{year:2022,month:3,day:25},{year:2023,month:3,day:24},{year:2024,month:3,day:22},{year:2025,month:3,day:21}], predictedYear: 2027 } } },
  { id: 90, name: "University of Michigan", location: "Ann Arbor, MI", type: "Public Research University", admissionRate: 17.7,
    decisions: {
      ea: { label: "Early Action (EA)", deadline: "November 1", history: [{year:2021,month:12,day:24},{year:2022,month:12,day:24},{year:2023,month:12,day:24},{year:2024,month:12,day:24}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "February 1", history: [{year:2022,month:4,day:1},{year:2023,month:4,day:1},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 91, name: "University of Virginia", location: "Charlottesville, VA", type: "Public Research University", admissionRate: 20.5,
    decisions: {
      ea: { label: "Restrictive Early Action (REA)", deadline: "November 1", history: [{year:2021,month:12,day:17},{year:2022,month:12,day:15},{year:2023,month:12,day:14},{year:2024,month:12,day:13}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 1", history: [{year:2022,month:4,day:1},{year:2023,month:4,day:1},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 92, name: "UNC Chapel Hill", location: "Chapel Hill, NC", type: "Public Research University", admissionRate: 17.5,
    decisions: {
      ea: { label: "Early Action (EA)", deadline: "October 15", history: [{year:2021,month:1,day:27},{year:2022,month:1,day:26},{year:2023,month:1,day:25},{year:2024,month:1,day:24}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 15", history: [{year:2022,month:4,day:1},{year:2023,month:4,day:1},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 93, name: "Georgia Tech", location: "Atlanta, GA", type: "Public Research University", admissionRate: 16.5,
    decisions: {
      ea: { label: "Early Action (EA)", deadline: "October 15", history: [{year:2021,month:1,day:27},{year:2022,month:1,day:26},{year:2023,month:1,day:25},{year:2024,month:1,day:24}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 4", history: [{year:2022,month:3,day:21},{year:2023,month:3,day:20},{year:2024,month:3,day:18},{year:2025,month:3,day:17}], predictedYear: 2027 } } },
  { id: 94, name: "University of Texas at Austin", location: "Austin, TX", type: "Public Research University", admissionRate: 29.0,
    decisions: {
      ea: { label: "Early Action (EA)", deadline: "November 1", history: [{year:2022,month:1,day:31},{year:2023,month:1,day:31},{year:2024,month:1,day:31},{year:2025,month:1,day:31}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "December 1", history: [{year:2022,month:4,day:1},{year:2023,month:4,day:1},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 95, name: "University of Florida", location: "Gainesville, FL", type: "Public Research University", admissionRate: 24.0,
    decisions: {
      ea: { label: "Early Action (EA)", deadline: "November 1", history: [{year:2021,month:12,day:17},{year:2022,month:12,day:17},{year:2023,month:12,day:17},{year:2024,month:12,day:17}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "March 1", history: [{year:2022,month:4,day:1},{year:2023,month:4,day:1},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 96, name: "University of Georgia", location: "Athens, GA", type: "Public Research University", admissionRate: 40.0,
    decisions: {
      ea: { label: "Early Action (EA)", deadline: "October 15", history: [{year:2021,month:10,day:15},{year:2022,month:10,day:15},{year:2023,month:10,day:15},{year:2024,month:10,day:15}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 1", history: [{year:2022,month:4,day:1},{year:2023,month:4,day:1},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 97, name: "University of Illinois Urbana-Champaign", location: "Champaign, IL", type: "Public Research University", admissionRate: 44.8,
    decisions: {
      ea: { label: "Early Action (EA)", deadline: "November 1", history: [{year:2021,month:12,day:17},{year:2022,month:12,day:17},{year:2023,month:12,day:17},{year:2024,month:12,day:17}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "March 15", history: [{year:2022,month:3,day:25},{year:2023,month:3,day:24},{year:2024,month:3,day:22},{year:2025,month:3,day:21}], predictedYear: 2027 } } },
  { id: 98, name: "University of Wisconsin-Madison", location: "Madison, WI", type: "Public Research University", admissionRate: 48.9,
    decisions: {
      ea: { label: "Early Action (EA)", deadline: "November 1", history: [{year:2021,month:1,day:28},{year:2022,month:1,day:27},{year:2023,month:1,day:26},{year:2024,month:1,day:25}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "February 1", history: [{year:2022,month:3,day:21},{year:2023,month:3,day:20},{year:2024,month:3,day:18},{year:2025,month:3,day:17}], predictedYear: 2027 } } },
  { id: 99, name: "Penn State University", location: "University Park, PA", type: "Public Research University", admissionRate: 56.4,
    decisions: {
      ea: { label: "Early Action (EA)", deadline: "November 1", history: [{year:2021,month:12,day:24},{year:2022,month:12,day:24},{year:2023,month:12,day:24},{year:2024,month:12,day:24}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "Rolling", history: [{year:2022,month:3,day:15},{year:2023,month:3,day:15},{year:2024,month:3,day:15},{year:2025,month:3,day:15}], predictedYear: 2027 } } },
  { id: 100, name: "Ohio State University", location: "Columbus, OH", type: "Public Research University", admissionRate: 53.0,
    decisions: {
      ea: { label: "Early Action (EA)", deadline: "November 1", history: [{year:2021,month:12,day:24},{year:2022,month:12,day:24},{year:2023,month:12,day:24},{year:2024,month:12,day:24}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "February 1", history: [{year:2022,month:3,day:21},{year:2023,month:3,day:20},{year:2024,month:3,day:18},{year:2025,month:3,day:17}], predictedYear: 2027 } } },
  { id: 101, name: "Purdue University", location: "West Lafayette, IN", type: "Public Research University", admissionRate: 53.0,
    decisions: {
      ea: { label: "Early Action (EA)", deadline: "November 1", history: [{year:2021,month:12,day:12},{year:2022,month:12,day:12},{year:2023,month:12,day:12},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "February 1", history: [{year:2022,month:3,day:15},{year:2023,month:3,day:15},{year:2024,month:3,day:15},{year:2025,month:3,day:15}], predictedYear: 2027 } } },
  { id: 102, name: "Indiana University", location: "Bloomington, IN", type: "Public Research University", admissionRate: 80.0,
    decisions: {
      ea: { label: "Early Action (EA)", deadline: "November 1", history: [{year:2021,month:12,day:1},{year:2022,month:12,day:1},{year:2023,month:12,day:1},{year:2024,month:12,day:1}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "February 1", history: [{year:2022,month:3,day:15},{year:2023,month:3,day:15},{year:2024,month:3,day:15},{year:2025,month:3,day:15}], predictedYear: 2027 } } },
  { id: 103, name: "Michigan State University", location: "East Lansing, MI", type: "Public Research University", admissionRate: 83.0,
    decisions: {
      ea: { label: "Early Action (EA)", deadline: "November 1", history: [{year:2021,month:12,day:1},{year:2022,month:12,day:1},{year:2023,month:12,day:1},{year:2024,month:12,day:1}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "February 1", history: [{year:2022,month:3,day:15},{year:2023,month:3,day:15},{year:2024,month:3,day:15},{year:2025,month:3,day:15}], predictedYear: 2027 } } },
  { id: 104, name: "University of Washington", location: "Seattle, WA", type: "Public Research University", admissionRate: 52.0,
    decisions: {
      rd: { label: "Regular Decision", deadline: "November 15", history: [{year:2022,month:3,day:25},{year:2023,month:3,day:24},{year:2024,month:3,day:22},{year:2025,month:3,day:21}], predictedYear: 2027 } } },
  { id: 105, name: "University of Maryland", location: "College Park, MD", type: "Public Research University", admissionRate: 44.7,
    decisions: {
      ea: { label: "Early Action (EA)", deadline: "November 1", history: [{year:2021,month:1,day:31},{year:2022,month:1,day:31},{year:2023,month:1,day:31},{year:2024,month:1,day:31}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 20", history: [{year:2022,month:3,day:28},{year:2023,month:3,day:27},{year:2024,month:3,day:25},{year:2025,month:3,day:24}], predictedYear: 2027 } } },
  { id: 106, name: "University of Connecticut", location: "Storrs, CT", type: "Public Research University", admissionRate: 56.0,
    decisions: {
      ea: { label: "Early Action (EA)", deadline: "November 1", history: [{year:2021,month:12,day:15},{year:2022,month:12,day:15},{year:2023,month:12,day:15},{year:2024,month:12,day:15}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 15", history: [{year:2022,month:3,day:21},{year:2023,month:3,day:20},{year:2024,month:3,day:18},{year:2025,month:3,day:17}], predictedYear: 2027 } } },
  { id: 107, name: "Stony Brook University", location: "Stony Brook, NY", type: "Public Research University", admissionRate: 52.0,
    decisions: {
      ea: { label: "Early Action (EA)", deadline: "November 1", history: [{year:2022,month:1,day:15},{year:2023,month:1,day:15},{year:2024,month:1,day:15},{year:2025,month:1,day:15}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 15", history: [{year:2022,month:3,day:21},{year:2023,month:3,day:20},{year:2024,month:3,day:18},{year:2025,month:3,day:17}], predictedYear: 2027 } } },
  { id: 108, name: "Binghamton University", location: "Vestal, NY", type: "Public Research University", admissionRate: 38.0,
    decisions: {
      ea: { label: "Early Action (EA)", deadline: "November 1", history: [{year:2022,month:1,day:15},{year:2023,month:1,day:15},{year:2024,month:1,day:15},{year:2025,month:1,day:15}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 15", history: [{year:2022,month:3,day:21},{year:2023,month:3,day:20},{year:2024,month:3,day:18},{year:2025,month:3,day:17}], predictedYear: 2027 } } },
  { id: 109, name: "College of William & Mary", location: "Williamsburg, VA", type: "Public Liberal Arts University", admissionRate: 35.5,
    decisions: {
      ea: { label: "Early Action (EA)", deadline: "November 1", history: [{year:2021,month:12,day:15},{year:2022,month:12,day:15},{year:2023,month:12,day:15},{year:2024,month:12,day:15}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 1", history: [{year:2022,month:4,day:1},{year:2023,month:3,day:31},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 110, name: "University of Pittsburgh", location: "Pittsburgh, PA", type: "Public Research University", admissionRate: 54.0,
    decisions: {
      ed: { label: "Early Decision (ED)", deadline: "November 1", history: [{year:2021,month:12,day:14},{year:2022,month:12,day:14},{year:2023,month:12,day:14},{year:2024,month:12,day:12}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "January 15", history: [{year:2022,month:3,day:21},{year:2023,month:3,day:20},{year:2024,month:3,day:18},{year:2025,month:3,day:17}], predictedYear: 2027 } } },
  { id: 111, name: "University of Vermont", location: "Burlington, VT", type: "Public Research University", admissionRate: 67.0,
    decisions: {
      ea: { label: "Early Action (EA)", deadline: "November 1", history: [{year:2021,month:12,day:15},{year:2022,month:12,day:15},{year:2023,month:12,day:15},{year:2024,month:12,day:15}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "February 1", history: [{year:2022,month:3,day:21},{year:2023,month:3,day:20},{year:2024,month:3,day:18},{year:2025,month:3,day:17}], predictedYear: 2027 } } },
  { id: 112, name: "University of Colorado Boulder", location: "Boulder, CO", type: "Public Research University", admissionRate: 79.0,
    decisions: {
      ea: { label: "Early Action (EA)", deadline: "November 15", history: [{year:2021,month:12,day:20},{year:2022,month:12,day:20},{year:2023,month:12,day:20},{year:2024,month:12,day:20}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "February 15", history: [{year:2022,month:3,day:21},{year:2023,month:3,day:20},{year:2024,month:3,day:18},{year:2025,month:3,day:17}], predictedYear: 2027 } } },
  { id: 113, name: "Pepperdine University", location: "Malibu, CA", type: "Private University", admissionRate: 39.0,
    decisions: {
      rd: { label: "Regular Decision", deadline: "January 15", history: [{year:2022,month:4,day:1},{year:2023,month:3,day:31},{year:2024,month:3,day:28},{year:2025,month:3,day:28}], predictedYear: 2027 } } },
  { id: 114, name: "University of Arizona", location: "Tucson, AZ", type: "Public Research University", admissionRate: 85.0,
    decisions: {
      ea: { label: "Early Action (EA)", deadline: "November 1", history: [{year:2021,month:12,day:1},{year:2022,month:12,day:1},{year:2023,month:12,day:1},{year:2024,month:12,day:1}], predictedYear: 2026 },
      rd: { label: "Regular Decision", deadline: "May 1", history: [{year:2022,month:3,day:15},{year:2023,month:3,day:15},{year:2024,month:3,day:15},{year:2025,month:3,day:15}], predictedYear: 2027 } } },
];
