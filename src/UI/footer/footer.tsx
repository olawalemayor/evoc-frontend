import React from "react";
import "./footer.css";
import logo from "../../assets/logo_transparent.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-row line-bottom">
          <div className="footer-column">
            <div className="footer-header">Header 1</div>
            <div className="footer-link">
              <a href="#1">Link 1</a>
            </div>
            <div className="footer-link">
              <a href="#2">Link 2</a>
            </div>
            <div className="footer-link">
              <a href="#3">Link 3</a>
            </div>
            <div className="footer-link">
              <a href="#4">Link 4</a>
            </div>
            <div className="footer-link">
              <a href="#5">Link 5</a>
            </div>
          </div>

          <div className="footer-column">
            <div className="footer-header">Header 2</div>
            <div className="footer-link">
              <a href="#6">Link 1</a>
            </div>
            <div className="footer-link">
              <a href="#7">Link 2</a>
            </div>
            <div className="footer-link">
              <a href="#8">Link 3</a>
            </div>
            <div className="footer-link">
              <a href="#9">Link 4</a>
            </div>
            <div className="footer-link">
              <a href="#10">Link 5</a>
            </div>
          </div>

          <div className="footer-column">
            <div className="footer-header">Header 3</div>
            <div className="footer-link">
              <a href="#11">Link 1</a>
            </div>
            <div className="footer-link">
              <a href="#12">Link 2</a>
            </div>
            <div className="footer-link">
              <a href="#13">Link 3</a>
            </div>
            <div className="footer-link">
              <a href="#14">Link 4</a>
            </div>
            <div className="footer-link">
              <a href="#15">Link 5</a>
            </div>
          </div>

          <div className="footer-column">
            <div className="footer-header">Header 4</div>
            <div className="footer-link">
              <a href="#16">Link 1</a>
            </div>
            <div className="footer-link">
              <a href="#17">Link 2</a>
            </div>
            <div className="footer-link">
              <a href="#18">Link 3</a>
            </div>
            <div className="footer-link">
              <a href="#19">Link 4</a>
            </div>
            <div className="footer-link">
              <a href="#20">Link 5</a>
            </div>
          </div>
        </div>

        <div className="footer-row">
          <div className="footer-flex">
            <div className="brand-info">
              <img src={logo} alt="evoc ecommerce store" />
            </div>
            <div className="footer-socials">
              <a href="#facebook">Facebook</a>
              <a href="#instagram">Instagram</a>
              <a href="#twitter">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
