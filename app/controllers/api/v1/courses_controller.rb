module Api
  module V1
    class CoursesController < ApplicationController

      protect_from_forgery with: :null_session
      def index
        courses = Course.all
        render json: CourseSerializer.new(courses, options).serialized_json
        
      end
          
      def show
        course = Course.find_by(nick: params[:nick])
        render json: CourseSerializer.new(course, options).serialized_json
      end

      def create
        course = Course.new(course_params)

        if course.save 
          render json: CourseSerializer.new(course).serialized_json 
        else
          render json: {error: course.errors.messages}, status: 422
        end
      end
      
      def update
        course = Course.find_by(nick: params[:nick])

        if course.save
          render json: CourseSerializer.new(course, options).serialized_json
        else
          render json: {error: course.errors.messages}, status: 422
        end
      end

      def destroy
        course = Course.find_by(nick: params[:nick])

        if course.destroy
          head :no_content
        else
          ender json: {error: course.errors.messages}, status: 422
        end
      end
      
      def options
        @options ||= { include: %i[reviews] }
      end
      
      private
      # Strong params
      def course_params
        params.require(:course).permit(:name, :image_url)
      end
      
    end
  end
end