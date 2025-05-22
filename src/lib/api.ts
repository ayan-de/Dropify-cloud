const mockFiles = [
  { id: '1', name: 'Documents', type: 'folder' as const },
  { id: '2', name: 'Images', type: 'folder' as const },
  { id: '3', name: 'Project Files', type: 'folder' as const },
  { id: '4', name: 'Resume.pdf', type: 'file' as const, size: '2.4 MB', modified: 'Apr 12, 2025' },
  { id: '5', name: 'Presentation.pptx', type: 'file' as const, size: '5.1 MB', modified: 'Apr 10, 2025' },
  { id: '6', name: 'Budget.xlsx', type: 'file' as const, size: '1.8 MB', modified: 'Apr 5, 2025' },
  { id: '7', name: 'Profile.jpg', type: 'file' as const, size: '3.2 MB', modified: 'Mar 28, 2025' }
];

export const getFiles = async (path: string[] = []) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));

  // For simplicity, return all files for any path
  return mockFiles;
};

export const uploadFile = async (file: File, path: string[] = []) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));

  // For simplicity, just return the file info
  return {
    id: Date.now().toString(),
    name: file.name,
    type: 'file' as const,
    size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
    modified: new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  };
};

const users: { id: string; name: string; email: string; password: string; }[] = [];

export const signup = async (name: string, email: string, password: string) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    throw new Error("Email already in use");
  }

  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    password
  };

  users.push(newUser);

  return newUser;
};
