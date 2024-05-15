import { httpsAdmin, httpsNoLoading } from "./config";

export const userServ = {
  login: (values) => httpsNoLoading.post("/auth/signin", values),
  signup: (values) => httpsNoLoading.post("/auth/signup", values),
  getUsersPage: (index) =>
    httpsAdmin.get(`/users/phan-trang-tim-kiem?pageIndex=${index}&pageSize=10`),
  getUserByID: (id) => httpsAdmin.get(`/users/${id}`),
  createNewUser: (user) => httpsAdmin.post("/users", user),
  deleteUser: (id) => httpsAdmin.delete(`/users/?id=${id}`),
  updateUser: (userUpdate) =>
    httpsAdmin.put(`/users/${userUpdate.id}`, userUpdate),
  updateUsers: (id, values) =>
    httpsNoLoading.put(`/users/${id}`, values),
  searchUser: (key) => httpsAdmin.get(`users/search/${key}`),
  updateAvatar: (avatar) => httpsAdmin.post(`users/upload-avatar`, avatar),
  updateAvatars: (avatar) => httpsNoLoading.post(`users/upload-avatar`, avatar),
};

export const roomServ = {
  getAllRooms: () => httpsAdmin.get("/phong-thue"),
  getRoomById: (id) => httpsAdmin.get(`/phong-thue/${id}`),
  createRoom: (data) => httpsAdmin.post("/phong-thue", data),
  getRoomByViTri: (id) => httpsNoLoading.get(`/phong-thue/lay-phong-theo-vi-tri?maViTri=${id}`),
  uploadPhotoRoom: (id, photo) =>
    httpsAdmin.post(`/phong-thue/upload-hinh-phong?maPhong=${id}`, photo),
  deleteRoom: (id) => httpsAdmin.delete(`/phong-thue/${id}`),
  updateRoom: (data) => httpsAdmin.put(`/phong-thue/${data.id}`, data),
};

export const locationServ = {
  getAllLocations: () => httpsAdmin.get("/vi-tri"),
  getAllLocations: () => httpsNoLoading.get("/vi-tri"),
  getLocationByID: (id) => httpsAdmin.get(`/vi-tri/${id}`),
  createLocation: (data) => httpsAdmin.post("/vi-tri", data),
  updateLocation: (data) => httpsAdmin.put(`/vi-tri/${data.id}`, data),
  getPagination: () => httpsNoLoading.get(`/vi-tri/phan-trang-tim-kiem?pageIndex=1&pageSize=8`),
  deleteLocation: (id) => httpsAdmin.delete(`/vi-tri/${id}`),
  uploadPhotoLocation: (id, photo) =>
    httpsAdmin.post(`/vi-tri/upload-hinh-vitri?maViTri=${id}`, photo),
};

export const bookingSer = {
  getAllBookings: () => httpsAdmin.get("/dat-phong"),
  createBooked: (data) => httpsNoLoading.post("/dat-phong", data),
  getBookedById: (id) => httpsAdmin.get(`/dat-phong/lay-theo-nguoi-dung/${id}`),
  deleteBooking: (id) => httpsAdmin.delete(`/dat-phong/${id}`),
};

export const binhLuanServ = {
  getAllBinhLuanById: (id) => httpsNoLoading.get(`/binh-luan/lay-binh-luan-theo-phong/${id}`),
  createBinhLuan: (data) => httpsNoLoading.post(`/binh-luan`, data)
}