class Course < ApplicationRecord
  has_many :reviews
  
  before_create :slugify # pretty URLs

  def slugify
    self.nick = name.parameterize
  end
  def avg_score
    reviews.average(:score).to_f.round(2)
  end
end
