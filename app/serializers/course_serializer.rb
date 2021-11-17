class CourseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image_url, :nick
  has_many :reviews
end
